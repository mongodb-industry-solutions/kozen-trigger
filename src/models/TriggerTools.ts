import { IIoC } from "@kozen/engine";
import { ChangeStream, ChangeStreamDocument, Collection, Db, Document } from "mongodb";

export interface ITriggerTools {
    assistant?: IIoC;
    flow?: string;
    changeStream?: ChangeStream<Document, ChangeStreamDocument<Document>>;
    collectionName?: string;
    collection?: Collection<Document>;
    dbName?: string;
    db?: Db;
}