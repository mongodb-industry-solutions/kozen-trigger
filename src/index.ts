import { IConfig, IDependency, KzModule } from "@mongodb-solution-assurance/kozen";
import cli from "./configs/cli.json";
import ioc from "./configs/ioc.json";

export class TriggerModule extends KzModule {

    constructor(dependency?: any) {
        super(dependency);
        this.metadata.summary = 'Module for managing self-hosted MongoDB triggers';
        this.metadata.alias = 'trigger';
    }

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
        dep = this.fix(dep);
        return Promise.resolve(dep as Record<string, IDependency>);
    }
}