import path from 'path';
import {promises as fs} from 'fs';
import {MediaEntity} from "@/app/api/media/types";

// Server side data fetching method
export async function fetchMedia(): Promise<MediaEntity[]> {
    const jsonDirectory = path.join(process.cwd());
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    return JSON.parse(fileContents);
}
// Client side handler for fetching data
export async function GET(req: Request){
    if(req.method !== 'GET'){
        throw new Error('Method not allowed')
    }

    const jsonDirectory = path.join(process.cwd());
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    return new Response(fileContents)
}