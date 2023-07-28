import path from 'path';
import { promises as fs } from 'fs';

export async function fetchMedia(): Promise<MediaEntity[]> {
    const jsonDirectory = path.join(process.cwd());
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    return JSON.parse(fileContents);
}