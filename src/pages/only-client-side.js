export default function OnlyClientSide() {
    return (
        <h1>Only Client Side</h1>
    )
}

export const getStaticProps = () => {
    return {
        props: {

        }
    }
}