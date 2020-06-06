
export const appConstant={
    //route
    loginRoute:'/login',
    homeRoute:'/home',
    productsRoute:'/products',
    productDetailRoute:'/productDetail',
    accountRoute:'/account',
    accountSettingRoute:'/account/setting',
    accountOrderRoute:'/account/orders',
    cartRoute:'/cart',
    paymentRoute:'/payment',
    adminRoute:'/admin',
    dashboardRoute:'/admin/dashboard',
    addProductRoute:'/admin/addProduct',
    editProductRoute:'/admin/editProduct',
    ordersRoute:'/admin/orders',


    //action
    GET_PRODUCTS:'GET_PRODUCTS',
    GET_PRODUCT:'GET_PRODUCT',
    ADD_PRODUCT:'ADD_PRODUCT',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHECK_LOGIN: 'CHECK_LOGIN',
    REGISTER:'REGISTER',
    ADD_USER_INFO:'ADD_USER_INFO',
    GET_USER_INFO:'GET_USER_INFO',
    GET_ORDERS:'GET_ORDERS',
    GET_USER_ORDERS:'GET_USER_ORDERS',
    ADD_ORDER:'ADD_ORDER',
    GET_CART:'GET_CART',
    ADD_TO_CART:'ADD_TO_CART',
    TEMP_ADD_TO_CART:'TEMP_ADD_TO_CART',
    DELETE_FROM_CART:'DELETE_FROM_CART',
    TEMP_DELETE_FROM_CART:'TEMP_DELETE_FROM_CART',
    GET_SHIPPING:'GET_SHIPPING',
    ADD_TO_FILTER:'ADD_TO_FILTER',
    GET_FILTER:'GET_FILTER',
    DELETE_ONE_FILTER:'DELETE_ONE_FILTER',



    //message
    LOGIN_SUCCESS_MESSAGE:'Login Success',
    LOGIN_FAILURE_MESSAGE:'Login Failed,please try again',


    //product fields
    REGISTER_FIELD:[
        {
            name:'username',
            displayName:'Username',
            type:'text'
        },
        {
            name:'password',
            displayName:'Password',
            type:'text'
        },
        {
            name:'confirmPassword',
            displayName:'Confirm your Password',
            type:'number'
        },
        {
            name:'phone',
            displayName:'Phone Number',
            type:'number'
        },
        {
            name:'email',
            displayName:'Email',
            type:'email'
        },
    ]
}