import Link from "next/link";

const A = ({text, href}) => {
	return (
		<Link href={href}>
			<a style={{
				marginRight: '15px',
				whiteSpace: 'nowrap',
			}}>{text}</a>
		</Link>
	)
}
export default A