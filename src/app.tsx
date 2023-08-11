import { useState } from "preact/hooks";
import "@/styles/app.css";

import MainLayout from "@/layouts/MainLayout";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<MainLayout>
			<div className="mx-auto max-w-7xl bg-slate-100 py-4">
				<h1>Vite + Preact + Tailwind</h1>
				<div className="">
					<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				</div>
			</div>
		</MainLayout>
	);
}
