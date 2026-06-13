import { QuartzFilterPlugin } from '@quartz-community/types';

interface Options {
    folders?: string[];
}
declare const ExcludeFolders: QuartzFilterPlugin<Options>;

export { ExcludeFolders, ExcludeFolders as default };
