export class LoggerAction {

	static WRITE_COMPLETE = 'Logger/WRITE-COMPLETE';

	static complete(action) {
		return {
			type: LoggerAction.WRITE_COMPLETE,
			payload: {
				log: action
			}
		}
	};

}
