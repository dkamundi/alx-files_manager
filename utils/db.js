import { MongoClient } from 'mongodb';

class DClient {
	constructor() {
		const host = process.env.DB_HOST || 'localhost';
		const port = process.env.DB_PORT || 27017;
		const database = process.env.DB_DATABASE || 'files_manager';

		const url = `mongodb://${host}:${port}/${database}`;


		this.client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

		this.client.connect()
			.then(() => console.log('Connected to MongoDB'))
			.catch((err) => console.error(`Error connecting to MongoDB: ${err}`));
	}

	isAlive() {
		return this.client.isConnected();
	}

	async nbUsers() {
		const usersCollection = this.client.db().collection('users');
		return usersCollection.countDocuments();
	}

	async nbFiles() {
		const fileCollection = this.client.db().collection('files');
		return filesCollection.countDocuments;
	}
}

const dbClient = new DBClient();
export default dbClient;
