import useMonolithApiCallback, { MonolithError } from "./useMonolithApiCallback";
import { AppConfig } from "../../models/AppConfig";

export interface FetchResponse {
	postAppConfigStatus?: number;
	postAppConfigLoading: boolean;
	postAppConfigFailed: MonolithError | undefined;
	postAppConfig: () => void;
}

export default function usepostAppConfigCallback(appSlug: string, appConfig: string): FetchResponse {
	const {
		statusCode: postAppConfigStatus,
		loading: postAppConfigLoading,
		failed: postAppConfigFailed,
		call: postAppConfig
	} = useMonolithApiCallback<AppConfig>(`/api/app/${appSlug}/config`, {
		method: "POST",
		body: JSON.stringify({
			app_config_datastore_yaml: appConfig
		})
	});

	return {
		postAppConfigStatus,
		postAppConfigLoading,
		postAppConfigFailed,
		postAppConfig
	};
}
