import "./styles.css";

export default function Layout(props: {
    children: React.ReactNode,
    model: React.ReactNode
}) {
    return <>
        {props.model}
        {props.children}
    </>
}