import { FC, JSX } from "preact/compat";

interface MainLayoutProps {
	children: JSX.Element | JSX.Element[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <div className="h-full w-full">{children}</div>;
};

export default MainLayout;
