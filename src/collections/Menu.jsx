import { Home, SquareTerminal, AppWindowMac, Blocks, PenTool, Newspaper } from "lucide-react";

const Menu = [
    {label: 'Главная', url: '/', icon: Home},
    {label: 'Проекты', url: '/projects', icon: SquareTerminal},
    {label: 'Софт', url: '/soft', icon: AppWindowMac},
    {label: 'Макеты', url: '/design', icon: PenTool },
    {label: 'Новости', url: '/articles', icon: Newspaper},
    {label: 'Плагины', url: '/plugins', icon: Blocks},
];

export default Menu;
