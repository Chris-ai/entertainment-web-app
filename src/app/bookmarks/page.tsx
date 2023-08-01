import Container from "@/components/common/Container";
import {getBookmarks} from "@/service/media/mediaService";
import Bookmarks from "@/components/bookmarks/Bookmarks";

export default async function Page() {
    const bookmarks = await getBookmarks();

    return (
        <Container>
                <Bookmarks bookmarks={bookmarks}/>
        </Container>
    )
}