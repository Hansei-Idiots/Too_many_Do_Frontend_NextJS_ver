import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function List(){

    const session = await getServerSession(authOptions);

    if (session == null) {
        console.log("로그인 후 이용해주세요")
        redirect('/'); // 세션이 없으면 바로 리디렉션
    }

    return(
        <div>
            <h1>리스트 페이지</h1>
        </div>
    )
}