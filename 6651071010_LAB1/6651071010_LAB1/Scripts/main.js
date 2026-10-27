// Quản lý giỏ hàng với localStorage
let cart = JSON.parse(localStorage.getItem('cart_sport')) || [];

function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => b.innerText = totalQty);
}

function addToCart(id, name, price, img) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, price, img, quantity: 1 });
    }
    localStorage.setItem('cart_sport', JSON.stringify(cart));
    updateCartBadge();
    alert(`Đã thêm "${name}" vào giỏ hàng thành công!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart_sport', JSON.stringify(cart));
    renderCheckoutCart();
    updateCartBadge();
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
        localStorage.setItem('cart_sport', JSON.stringify(cart));
        renderCheckoutCart();
        updateCartBadge();
    }
}

function renderCheckoutCart() {
    const tbody = document.getElementById('cart-items-body');
    const totalEl = document.getElementById('cart-total-price');
    if (!tbody) return;

    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px; color:#94a3b8;">Giỏ hàng của bạn đang trống.</td></tr>';
        if (totalEl) totalEl.innerText = '0đ';
        return;
    }

    let html = '';
    let grandTotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        html += `
            <tr>
                <td><img src="${item.img}" style="width:50px; height:50px; border-radius:6px; object-fit:cover;"></td>
                <td><b>${item.name}</b></td>
                <td>${item.price.toLocaleString('vi-VN')}đ</td>
                <td>
                    <button type="button" onclick="changeQuantity(${item.id}, -1)" style="padding:2px 8px; background:#0f172a; color:#fff; border:1px solid #334155; border-radius:4px; cursor:pointer;">-</button>
                    <span style="margin: 0 8px; font-weight:bold;">${item.quantity}</span>
                    <button type="button" onclick="changeQuantity(${item.id}, 1)" style="padding:2px 8px; background:#0f172a; color:#fff; border:1px solid #334155; border-radius:4px; cursor:pointer;">+</button>
                </td>
                <td style="color:#38bdf8; font-weight:bold;">${itemTotal.toLocaleString('vi-VN')}đ</td>
                <td><button type="button" onclick="removeFromCart(${item.id})" style="background:transparent; border:none; color:#ef4444; cursor:pointer; font-size:16px;">&times;</button></td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
    if (totalEl) totalEl.innerText = grandTotal.toLocaleString('vi-VN') + 'đ';
}

function filterCategory(cat) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.pill-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderCheckoutCart();
});
