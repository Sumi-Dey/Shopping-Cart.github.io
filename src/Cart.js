.maincontainer{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
}
.app{
    max-width: 930px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.productContainer {
    margin-top: 2rem;
    display: flex;
    gap: 20px;
}

.productContainer>div:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    gap: 55.5px;
    flex: 3;
}

.productContainer>div:nth-of-type(2) {
    background-color: white;
    height: fit-content;
    flex: 1;
    position: sticky;
    top: 0;
}
.wholecard{
    box-shadow: 13.5px 12.8px 11px #cbbebe;
}

.place-order {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 1rem 1rem;
    position: sticky;
    bottom: 0;
    background-color: white;
}

.place-order>button {
    background-color: orangered;
    border: 0;
    float: right;
    padding: 0.5rem;
    width: 20%;
}

.cart-title {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #047BD5;
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav {
    display: flex;
    justify-content: space-between;
    height: 3.5rem;
    align-items: center;
    background-color: #047BD5;
    list-style: none;
    justify-content: space-around;
}

.icon {
    font-size: 2.1rem;
    text-decoration: none;
    color: #EB455F;
    align-items: center;
    font-family: 'Merriweather', serif;
}

.cart {
    color: #EB455F;
    font-size: 1.2rem;
    font-family: 'Times New Roman', Times, serif;
    position: relative;
}

.card-body>div {
    display: flex;
    justify-content: space-between;
}

.filters {
    background-color: black;
    height: fit-content;
    color: white;
    padding: 1.2rem
}

.filters>div>div {
    padding: 1rem 0 1rem 1rem;
}

.cartItems {
    display: flex;
    gap: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 10px;
}

.cartItems>div:nth-of-type(1) {
    flex: 1;
    height: 10rem;
    text-align: center;
}

.cartItems>div:nth-of-type(2) {
    align-items: center;
    line-height: 3rem;
    font-size: 1.2rem;
    font-family: 'Times New Roman', Times, serif;
    flex: 3;
}

.cartTotal {
    padding: 1.5rem;
    gap: 0.5rem;
    font-size: 17px;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: 10px 10px 10px 5px lightgrey;
}

.cartTotal>div {
    display: flex;
    justify-content: space-between;
}

.cartTotal>hr {
    border-top: 1px dashed darkgrey;
}


/* RESPONSIVE */

@media screen and (max-width:768px){
    .app{
        max-width: 600px;
    }
    .cartItems>div:nth-of-type(2) {
        line-height: 33.5px;
        font-size: 17px;
    }
}
@media screen and (max-width:425px){
    .app{
        max-width: 260px;
    }
    .emptycart img{
        width: 20rem;
    }
    .productContainer{
        display: block;
    }
    .cartItems{
        display: block;
    }
    .cartItems>div:nth-of-type(2) {
        text-align: center;
    }
    .cartTotal{
        width: 100%;
        margin-top: 20px;
    }
}
