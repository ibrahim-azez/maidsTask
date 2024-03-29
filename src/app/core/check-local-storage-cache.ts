import 'reflect-metadata';
import { of, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { LocalStorageService } from './data-access/services/storage.service';

export function CheckLocalStorageCache(localStorageCacheKey: string) {
	return function (
		target: Record<string, unknown> | any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	): any {
		const localStorageService = new LocalStorageService();
		const originalMethod = descriptor.value;

		descriptor.value = function (...args: any[]) {
			const cacheKey = localStorageCacheKey + args?.slice(0, 1)?.pop() ?? '';
			return localStorageService.getItem(cacheKey).pipe(
				switchMap((value) => {
					if (!value || args?.slice(1, 2)?.pop()) {
						const result = originalMethod.apply(this, args).pipe(
							tap((res) => {
								localStorageService.setItem(cacheKey, JSON.stringify(res));
							})
						) as Observable<any>;

						return result;
					}

					return of(JSON.parse(value)) as Observable<any>;
				})
			);
		};
		return descriptor;
	};
}
