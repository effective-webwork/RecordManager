db.record.createIndex({dedup_id: 1}, { partialFilterExpression: { dedup_id: { $exists: true } } });
db.record.createIndex({title_keys: 1}, {sparse: true});
db.record.createIndex({isbn_keys: 1}, {sparse: true});
db.record.createIndex({id_keys: 1}, {sparse: true});
db.record.createIndex({oai_id: 1});
db.record.createIndex({host_record_id: 1});
db.record.createIndex({updated: 1});
db.record.createIndex({linking_id: 1});
db.record.createIndex({main_id: 1}, {sparse: true});
db.record.createIndex({source_id: 1, update_needed: 1});
db.dedup.createIndex({changed: 1});
// Only for OAI-PMH provider: db.record.createIndex({source_id: 1, updated: 1});
