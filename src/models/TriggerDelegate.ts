import { ChangeStreamDocument, Document } from "mongodb";
import { ITriggerTools } from "./TriggerTools";

export interface ITriggerDelegate {
    default?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    on?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    insert?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    update?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    delete?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    remove?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    replace?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    drop?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    rename?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    dropDatabase?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    invalidate?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    createIndexes?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    create?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    modify?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    dropIndexes?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    shardCollection?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    reshardCollection?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
    refineCollectionShardKey?: (change: ChangeStreamDocument<Document>, tools?: ITriggerTools) => void;
}