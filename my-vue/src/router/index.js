import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/page/login'
// import Manage from '@/page/manage'
// import Home from '@/page/home'
// import UserList from '@/page/userList'
// import AddGoods from '@/page/addGoods'
// import AddShop from '@/page/addShop'
// import AdminList from '@/page/adminList'
// import AdminSet from '@/page/adminSet'
// import Explain from '@/page/explain'
// import FoodList from '@/page/foodList'
// import NewMember from '@/page/newMember'
// import OrderList from '@/page/orderList'
// import SendMessage from '@/page/sendMessage'
// import ShopList from '@/page/shopList'
// import UploadImg from '@/page/uploadImg'
// import Visitor from '@/page/visitor'
// import VueEdit from '@/page/vueEdit'

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const Manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const Home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const AddShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const AddGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const UserList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const ShopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const FoodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const OrderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const AdminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const Visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const NewMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const UploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const VueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const AdminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const SendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const Explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Login
        },
        {
            path: '/manage',
            component: Manage,
            name: '',
            children: [{
                path: '',
                name: 'home',
                component: Home,
                meta: [],
            }, {
                path: '/addShop',
                component: AddShop,
                meta: ['添加数据', '添加商铺'],
            }, {
                path: '/addGoods',
                component: AddGoods,
                meta: ['添加数据', '添加商品'],
            }, {
                path: '/userList',
                component: UserList,
                meta: ['数据管理', '用户列表'],
            }, {
                path: '/shopList',
                component: ShopList,
                meta: ['数据管理', '商家列表'],
            }, {
                path: '/foodList',
                component: FoodList,
                meta: ['数据管理', '食品列表'],
            }, {
                path: '/orderList',
                component: OrderList,
                meta: ['数据管理', '订单列表'],
            }, {
                path: '/adminList',
                component: AdminList,
                meta: ['数据管理', '管理员列表'],
            }, {
                path: '/visitor',
                component: Visitor,
                meta: ['图表', '用户分布'],
            }, {
                path: '/newMember',
                component: NewMember,
                meta: ['图表', '用户数据'],
            }, {
                path: '/uploadImg',
                component: UploadImg,
                meta: ['文本编辑', 'MarkDown'],
            }, {
                path: '/vueEdit',
                component: VueEdit,
                meta: ['编辑', '文本编辑'],
            }, {
                path: '/adminSet',
                component: AdminSet,
                meta: ['设置', '管理员设置'],
            }, {
                path: '/sendMessage',
                component: SendMessage,
                meta: ['设置', '发送通知'],
            }, {
                path: '/explain',
                component: Explain,
                meta: ['说明', '说明'],
            }]
        }
    ]
})