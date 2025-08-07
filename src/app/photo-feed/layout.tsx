import "./styles.css";

export default function Layout(props: {
    children: React.ReactNode, // will be a page or nested layout
    model: React.ReactNode // this is parallel Model route :(@model) this is special route cuz it enables simultensious rendering
}) {
    return <>
        {props.model}
        {props.children} 
    </>
}