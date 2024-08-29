import { ReactNode } from "react";

interface IProps {
	title: string;
	subtitle: string;
    children: ReactNode;
}

export const FlowAreaWrapper = ({title, subtitle, children }: IProps) => {
	return (
		<section>
			<h2 className="text-xl">{title}</h2>
			<p className="italic -mt-1 mb-1 text-sm">{subtitle}</p>
			<div style={{ width: '40rem', height: '40rem', border: '1px solid black' }}>
			{children}
			</div>
		</section>
	)
}