// import { KzModule } from "../../shared/controllers/KzModule";
// import { IConfig } from "../../shared/models/Config";
// import { IDependency } from "../../shared/tools";

import { IConfig, IDependency, KzModule } from "@mongodb-solution-assurance/kozen";
import path from "path";
import cli from "./configs/cli.json";
import ioc from "./configs/ioc.json";

export class TriggerModule extends KzModule {

    public register(config: IConfig | null, opts?: any): Promise<Record<string, IDependency> | null> {
        let dep: Record<string, any> = {};
        switch (config?.type) {
            case 'cli':
                dep = { ...ioc, ...cli };
                break;
            default:
                dep = ioc;
                break;
        }
        for (const key in dep) {
            let item = dep[key] as IDependency;
            item.path = path.join(this.metadata.path || '', item.path || '');
        }
        return Promise.resolve(dep as Record<string, IDependency>);
    }
}