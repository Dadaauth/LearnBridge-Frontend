import {Card, CardBody, Avatar, CardHeader, Divider, CardFooter} from "@nextui-org/react";
;
import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";

export default async function Page() {
    return (
        <>
            <NavBar />
            <div className="flex flex-row">
                <SideBar />
                <div className="w-10/12 p-10 mt-4">
                    <PeersUI />
                </div>
            </div>
        </>
    );
}


function PeersUI() {
    const peers = [
        {
            name: "John",
            status: "Online",
        },
        {
            name: "Moses Arena",
            status: "offline",
        },
        {
            name: "Benson Idahousa",
            status: "online",
        }
    ]
    return (
        <>
            <h2 className="mb-3 text-xl">Your Peers</h2>
            <div className="flex flex-wrap gap-4">
                {peers.map((peer, idx) => {
                    return (<PeerCard peer={peer} key={idx}/>)
                })}
            </div>
        </>
    );
}

function PeerCard({peer}) {
    return (
        <>
            <Card className="max-w-[400px] min-w-[300px]">
                <CardHeader className="flex gap-3">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name={peer.name}/>
                    <div className="flex flex-col">
                        <p className="text-md">{peer.name}</p>
                        <p className="text-small text-default-500">{peer.status}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardFooter>
                    <button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600">Message</button>
                    <button className="w-full py-2 text-white bg-green-500 hover:bg-red-600">Call</button>
                </CardFooter>
            </Card>
        </>
    );
}