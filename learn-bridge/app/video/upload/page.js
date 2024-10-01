import {auth} from "../../../../auth";
import NavBar from "../../../../components/navbar";


export default async function Page() {
    const session = await auth();

    if (!session) return (<NavBar />);


    return (
        <>
            Upload some video
        </>
    );
}