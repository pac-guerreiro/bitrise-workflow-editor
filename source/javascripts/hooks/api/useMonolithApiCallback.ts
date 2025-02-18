import useFetchCallback, { FetchResponse } from "./useFetchCallback";
import getCookie from "../utils/cookies";

export interface MonolithError {
	error_msg: string;
}

export default function useMonolithApiCallback<T>(
	url: string,
	init?: RequestInit,
	parser?: (data: string) => unknown
): FetchResponse<T, MonolithError> {
	return useFetchCallback<T, MonolithError>(
		url,
		{
			...init,
			headers: {
				"X-CSRF-TOKEN": getCookie("CSRF-TOKEN"),
				...init?.headers
			}
		},
		parser
	);
}
