import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AlbumCreateRequest } from '../models/AlbumCreateRequest';
import { AlbumResponse } from '../models/AlbumResponse';
import { AlbumUpdateRequest } from '../models/AlbumUpdateRequest';
import { ArtistCreateRequest } from '../models/ArtistCreateRequest';
import { ArtistResponse } from '../models/ArtistResponse';
import { ArtistUpdateRequest } from '../models/ArtistUpdateRequest';
import { DeletedResponse } from '../models/DeletedResponse';
import { GenreCreateRequest } from '../models/GenreCreateRequest';
import { GenreResponse } from '../models/GenreResponse';
import { GenreUpdateRequest } from '../models/GenreUpdateRequest';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LocationInner } from '../models/LocationInner';
import { PlaylistCreateRequest } from '../models/PlaylistCreateRequest';
import { PlaylistResponse } from '../models/PlaylistResponse';
import { PlaylistUpdateRequest } from '../models/PlaylistUpdateRequest';
import { SongResponse } from '../models/SongResponse';
import { SongUpdateRequest } from '../models/SongUpdateRequest';
import { ValidationError } from '../models/ValidationError';

import { AlbumApiRequestFactory, AlbumApiResponseProcessor} from "../apis/AlbumApi";
export class ObservableAlbumApi {
    private requestFactory: AlbumApiRequestFactory;
    private responseProcessor: AlbumApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AlbumApiRequestFactory,
        responseProcessor?: AlbumApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AlbumApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AlbumApiResponseProcessor();
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest: AlbumCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AlbumResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAlbumApiV1AlbumPost(albumCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAlbumApiV1AlbumPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPost(albumCreateRequest: AlbumCreateRequest, _options?: ConfigurationOptions): Observable<AlbumResponse> {
        return this.createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest, _options).pipe(map((apiResponse: HttpInfo<AlbumResponse>) => apiResponse.data));
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAlbumApiV1AlbumIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<AlbumResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlbumApiV1AlbumIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlbumApiV1AlbumIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGet(id: number, _options?: ConfigurationOptions): Observable<AlbumResponse> {
        return this.getAlbumApiV1AlbumIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AlbumResponse>) => apiResponse.data));
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromAlbumApiV1AlbumIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromAlbumApiV1AlbumIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<AlbumResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllAlbumsApiV1AlbumsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllAlbumsApiV1AlbumsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGet(_options?: ConfigurationOptions): Observable<Array<AlbumResponse>> {
        return this.listAllAlbumsApiV1AlbumsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<AlbumResponse>>) => apiResponse.data));
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatchWithHttpInfo(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AlbumResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAlbumApiV1AlbumIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatch(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: ConfigurationOptions): Observable<AlbumResponse> {
        return this.updateAlbumApiV1AlbumIdPatchWithHttpInfo(id, albumUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<AlbumResponse>) => apiResponse.data));
    }

}

import { ArtistApiRequestFactory, ArtistApiResponseProcessor} from "../apis/ArtistApi";
export class ObservableArtistApi {
    private requestFactory: ArtistApiRequestFactory;
    private responseProcessor: ArtistApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtistApiRequestFactory,
        responseProcessor?: ArtistApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArtistApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArtistApiResponseProcessor();
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest: ArtistCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ArtistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createArtistApiV1ArtistPost(artistCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createArtistApiV1ArtistPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPost(artistCreateRequest: ArtistCreateRequest, _options?: ConfigurationOptions): Observable<ArtistResponse> {
        return this.createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ArtistResponse>) => apiResponse.data));
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteArtistApiV1ArtistIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<ArtistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getArtistApiV1ArtistIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtistApiV1ArtistIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGet(id: number, _options?: ConfigurationOptions): Observable<ArtistResponse> {
        return this.getArtistApiV1ArtistIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ArtistResponse>) => apiResponse.data));
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromSongApiV1SongIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromArtistApiV1ArtistIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromArtistApiV1ArtistIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<ArtistResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllArtistApiV1ArtistsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllArtistApiV1ArtistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGet(_options?: ConfigurationOptions): Observable<Array<ArtistResponse>> {
        return this.listAllArtistApiV1ArtistsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ArtistResponse>>) => apiResponse.data));
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatchWithHttpInfo(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ArtistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateArtistApiV1ArtistIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatch(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: ConfigurationOptions): Observable<ArtistResponse> {
        return this.updateArtistApiV1ArtistIdPatchWithHttpInfo(id, artistUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<ArtistResponse>) => apiResponse.data));
    }

}

import { DatabaseApiRequestFactory, DatabaseApiResponseProcessor} from "../apis/DatabaseApi";
export class ObservableDatabaseApi {
    private requestFactory: DatabaseApiRequestFactory;
    private responseProcessor: DatabaseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseApiRequestFactory,
        responseProcessor?: DatabaseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabaseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabaseApiResponseProcessor();
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatchWithHttpInfo(path: string, _options?: ConfigurationOptions): Observable<HttpInfo<boolean>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setDatabaseApiV1DbPatch(path, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setDatabaseApiV1DbPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatch(path: string, _options?: ConfigurationOptions): Observable<boolean> {
        return this.setDatabaseApiV1DbPatchWithHttpInfo(path, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

}

import { GenreApiRequestFactory, GenreApiResponseProcessor} from "../apis/GenreApi";
export class ObservableGenreApi {
    private requestFactory: GenreApiRequestFactory;
    private responseProcessor: GenreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GenreApiRequestFactory,
        responseProcessor?: GenreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenreApiResponseProcessor();
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest: GenreCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GenreResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createGenreApiV1GenrePost(genreCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGenreApiV1GenrePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePost(genreCreateRequest: GenreCreateRequest, _options?: ConfigurationOptions): Observable<GenreResponse> {
        return this.createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest, _options).pipe(map((apiResponse: HttpInfo<GenreResponse>) => apiResponse.data));
    }

    /**
     * Delete Genre
     * @param id
     */
    public deleteGenreApiV1GenreIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteGenreApiV1GenreIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteGenreApiV1GenreIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Genre
     * @param id
     */
    public deleteGenreApiV1GenreIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteGenreApiV1GenreIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Genre
     * @param id
     */
    public getGenreApiV1GenreIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<GenreResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenreApiV1GenreIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenreApiV1GenreIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genre
     * @param id
     */
    public getGenreApiV1GenreIdGet(id: number, _options?: ConfigurationOptions): Observable<GenreResponse> {
        return this.getGenreApiV1GenreIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GenreResponse>) => apiResponse.data));
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromAlbumApiV1AlbumIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromArtistApiV1ArtistIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Songs From Genre
     * @param id
     */
    public getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromGenreApiV1GenreIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Genre
     * @param id
     */
    public getSongsFromGenreApiV1GenreIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<GenreResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllGenresApiV1GenresGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllGenresApiV1GenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGet(_options?: ConfigurationOptions): Observable<Array<GenreResponse>> {
        return this.listAllGenresApiV1GenresGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<GenreResponse>>) => apiResponse.data));
    }

    /**
     * Update Genre
     * @param id
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenreIdPatchWithHttpInfo(id: number, genreUpdateRequest: GenreUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GenreResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateGenreApiV1GenreIdPatch(id, genreUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateGenreApiV1GenreIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Genre
     * @param id
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenreIdPatch(id: number, genreUpdateRequest: GenreUpdateRequest, _options?: ConfigurationOptions): Observable<GenreResponse> {
        return this.updateGenreApiV1GenreIdPatchWithHttpInfo(id, genreUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<GenreResponse>) => apiResponse.data));
    }

}

import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";
export class ObservableImageApi {
    private requestFactory: ImageApiRequestFactory;
    private responseProcessor: ImageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImageApiRequestFactory,
        responseProcessor?: ImageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImageApiResponseProcessor();
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePostWithHttpInfo(file: string, _options?: ConfigurationOptions): Observable<HttpInfo<number>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addImageApiV1ImagePost(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addImageApiV1ImagePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePost(file: string, _options?: ConfigurationOptions): Observable<number> {
        return this.addImageApiV1ImagePostWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteImageApiV1ImageIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteImageApiV1ImageIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteImageApiV1ImageIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getImageApiV1ImageIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImageApiV1ImageIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGet(id: number, _options?: ConfigurationOptions): Observable<void> {
        return this.getImageApiV1ImageIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PlaylistApiRequestFactory, PlaylistApiResponseProcessor} from "../apis/PlaylistApi";
export class ObservablePlaylistApi {
    private requestFactory: PlaylistApiRequestFactory;
    private responseProcessor: PlaylistApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlaylistApiRequestFactory,
        responseProcessor?: PlaylistApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlaylistApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlaylistApiResponseProcessor();
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest: PlaylistCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPlaylistApiV1PlaylistPost(playlistCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlaylistApiV1PlaylistPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPost(playlistCreateRequest: PlaylistCreateRequest, _options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest, _options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePlaylistApiV1PlaylistIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlaylistApiV1PlaylistIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlaylistApiV1PlaylistIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGet(id: number, _options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.getPlaylistApiV1PlaylistIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllPlaylistsApiV1PlaylistsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGet(_options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatch(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id, playlistUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

}

import { SongApiRequestFactory, SongApiResponseProcessor} from "../apis/SongApi";
export class ObservableSongApi {
    private requestFactory: SongApiRequestFactory;
    private responseProcessor: SongApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SongApiRequestFactory,
        responseProcessor?: SongApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SongApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SongApiResponseProcessor();
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSongApiV1SongIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSongApiV1SongIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteSongApiV1SongIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromSongApiV1SongIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<SongResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongApiV1SongIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongApiV1SongIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGet(id: number, _options?: ConfigurationOptions): Observable<SongResponse> {
        return this.getSongApiV1SongIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<SongResponse>) => apiResponse.data));
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromAlbumApiV1AlbumIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromArtistApiV1ArtistIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Genre
     * @param id
     */
    public getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromGenreApiV1GenreIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Genre
     * @param id
     */
    public getSongsFromGenreApiV1GenreIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<SongResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllSongApiV1SongsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllSongApiV1SongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGet(_options?: ConfigurationOptions): Observable<Array<SongResponse>> {
        return this.listAllSongApiV1SongsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<SongResponse>>) => apiResponse.data));
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamSongApiV1SongIdStreamGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamSongApiV1SongIdStreamGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGet(id: number, _options?: ConfigurationOptions): Observable<void> {
        return this.streamSongApiV1SongIdStreamGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatchWithHttpInfo(id: number, songUpdateRequest: SongUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SongResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSongApiV1SongIdPatch(id, songUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSongApiV1SongIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatch(id: number, songUpdateRequest: SongUpdateRequest, _options?: ConfigurationOptions): Observable<SongResponse> {
        return this.updateSongApiV1SongIdPatchWithHttpInfo(id, songUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<SongResponse>) => apiResponse.data));
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPostWithHttpInfo(file: string, _options?: ConfigurationOptions): Observable<HttpInfo<SongResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.uploadSongApiV1SongPost(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadSongApiV1SongPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPost(file: string, _options?: ConfigurationOptions): Observable<SongResponse> {
        return this.uploadSongApiV1SongPostWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<SongResponse>) => apiResponse.data));
    }

}

import { V1ApiRequestFactory, V1ApiResponseProcessor} from "../apis/V1Api";
export class ObservableV1Api {
    private requestFactory: V1ApiRequestFactory;
    private responseProcessor: V1ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: V1ApiRequestFactory,
        responseProcessor?: V1ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new V1ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new V1ApiResponseProcessor();
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePostWithHttpInfo(file: string, _options?: ConfigurationOptions): Observable<HttpInfo<number>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addImageApiV1ImagePost(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addImageApiV1ImagePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePost(file: string, _options?: ConfigurationOptions): Observable<number> {
        return this.addImageApiV1ImagePostWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest: AlbumCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AlbumResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAlbumApiV1AlbumPost(albumCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAlbumApiV1AlbumPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPost(albumCreateRequest: AlbumCreateRequest, _options?: ConfigurationOptions): Observable<AlbumResponse> {
        return this.createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest, _options).pipe(map((apiResponse: HttpInfo<AlbumResponse>) => apiResponse.data));
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest: ArtistCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ArtistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createArtistApiV1ArtistPost(artistCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createArtistApiV1ArtistPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPost(artistCreateRequest: ArtistCreateRequest, _options?: ConfigurationOptions): Observable<ArtistResponse> {
        return this.createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ArtistResponse>) => apiResponse.data));
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest: GenreCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GenreResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createGenreApiV1GenrePost(genreCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGenreApiV1GenrePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePost(genreCreateRequest: GenreCreateRequest, _options?: ConfigurationOptions): Observable<GenreResponse> {
        return this.createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest, _options).pipe(map((apiResponse: HttpInfo<GenreResponse>) => apiResponse.data));
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest: PlaylistCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPlaylistApiV1PlaylistPost(playlistCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlaylistApiV1PlaylistPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPost(playlistCreateRequest: PlaylistCreateRequest, _options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest, _options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAlbumApiV1AlbumIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteArtistApiV1ArtistIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Delete Genre
     * @param id
     */
    public deleteGenreApiV1GenreIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteGenreApiV1GenreIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteGenreApiV1GenreIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Genre
     * @param id
     */
    public deleteGenreApiV1GenreIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteGenreApiV1GenreIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteImageApiV1ImageIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteImageApiV1ImageIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteImageApiV1ImageIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePlaylistApiV1PlaylistIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDeleteWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<DeletedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSongApiV1SongIdDelete(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSongApiV1SongIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDelete(id: number, _options?: ConfigurationOptions): Observable<DeletedResponse> {
        return this.deleteSongApiV1SongIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DeletedResponse>) => apiResponse.data));
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<AlbumResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlbumApiV1AlbumIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlbumApiV1AlbumIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGet(id: number, _options?: ConfigurationOptions): Observable<AlbumResponse> {
        return this.getAlbumApiV1AlbumIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AlbumResponse>) => apiResponse.data));
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<ArtistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getArtistApiV1ArtistIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtistApiV1ArtistIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGet(id: number, _options?: ConfigurationOptions): Observable<ArtistResponse> {
        return this.getArtistApiV1ArtistIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ArtistResponse>) => apiResponse.data));
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFeaturesFromSongApiV1SongIdFeaturesGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Genre
     * @param id
     */
    public getGenreApiV1GenreIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<GenreResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenreApiV1GenreIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenreApiV1GenreIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genre
     * @param id
     */
    public getGenreApiV1GenreIdGet(id: number, _options?: ConfigurationOptions): Observable<GenreResponse> {
        return this.getGenreApiV1GenreIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GenreResponse>) => apiResponse.data));
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromAlbumApiV1AlbumIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromArtistApiV1ArtistIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<string>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(id: number, _options?: ConfigurationOptions): Observable<Array<string>> {
        return this.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getImageApiV1ImageIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImageApiV1ImageIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGet(id: number, _options?: ConfigurationOptions): Observable<void> {
        return this.getImageApiV1ImageIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlaylistApiV1PlaylistIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlaylistApiV1PlaylistIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGet(id: number, _options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.getPlaylistApiV1PlaylistIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<SongResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongApiV1SongIdGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongApiV1SongIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGet(id: number, _options?: ConfigurationOptions): Observable<SongResponse> {
        return this.getSongApiV1SongIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<SongResponse>) => apiResponse.data));
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromAlbumApiV1AlbumIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromArtistApiV1ArtistIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Genre
     * @param id
     */
    public getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromGenreApiV1GenreIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Genre
     * @param id
     */
    public getSongsFromGenreApiV1GenreIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<number>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(id: number, _options?: ConfigurationOptions): Observable<Array<number>> {
        return this.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Array<number>>) => apiResponse.data));
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<AlbumResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllAlbumsApiV1AlbumsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllAlbumsApiV1AlbumsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGet(_options?: ConfigurationOptions): Observable<Array<AlbumResponse>> {
        return this.listAllAlbumsApiV1AlbumsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<AlbumResponse>>) => apiResponse.data));
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<ArtistResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllArtistApiV1ArtistsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllArtistApiV1ArtistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGet(_options?: ConfigurationOptions): Observable<Array<ArtistResponse>> {
        return this.listAllArtistApiV1ArtistsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ArtistResponse>>) => apiResponse.data));
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<GenreResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllGenresApiV1GenresGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllGenresApiV1GenresGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGet(_options?: ConfigurationOptions): Observable<Array<GenreResponse>> {
        return this.listAllGenresApiV1GenresGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<GenreResponse>>) => apiResponse.data));
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllPlaylistsApiV1PlaylistsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGet(_options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<SongResponse>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllSongApiV1SongsGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllSongApiV1SongsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGet(_options?: ConfigurationOptions): Observable<Array<SongResponse>> {
        return this.listAllSongApiV1SongsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<SongResponse>>) => apiResponse.data));
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatchWithHttpInfo(path: string, _options?: ConfigurationOptions): Observable<HttpInfo<boolean>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setDatabaseApiV1DbPatch(path, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setDatabaseApiV1DbPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatch(path: string, _options?: ConfigurationOptions): Observable<boolean> {
        return this.setDatabaseApiV1DbPatchWithHttpInfo(path, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGetWithHttpInfo(id: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.streamSongApiV1SongIdStreamGet(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamSongApiV1SongIdStreamGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGet(id: number, _options?: ConfigurationOptions): Observable<void> {
        return this.streamSongApiV1SongIdStreamGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatchWithHttpInfo(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AlbumResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAlbumApiV1AlbumIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatch(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: ConfigurationOptions): Observable<AlbumResponse> {
        return this.updateAlbumApiV1AlbumIdPatchWithHttpInfo(id, albumUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<AlbumResponse>) => apiResponse.data));
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatchWithHttpInfo(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ArtistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateArtistApiV1ArtistIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatch(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: ConfigurationOptions): Observable<ArtistResponse> {
        return this.updateArtistApiV1ArtistIdPatchWithHttpInfo(id, artistUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<ArtistResponse>) => apiResponse.data));
    }

    /**
     * Update Genre
     * @param id
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenreIdPatchWithHttpInfo(id: number, genreUpdateRequest: GenreUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GenreResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateGenreApiV1GenreIdPatch(id, genreUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateGenreApiV1GenreIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Genre
     * @param id
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenreIdPatch(id: number, genreUpdateRequest: GenreUpdateRequest, _options?: ConfigurationOptions): Observable<GenreResponse> {
        return this.updateGenreApiV1GenreIdPatchWithHttpInfo(id, genreUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<GenreResponse>) => apiResponse.data));
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PlaylistResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatch(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: ConfigurationOptions): Observable<PlaylistResponse> {
        return this.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id, playlistUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<PlaylistResponse>) => apiResponse.data));
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatchWithHttpInfo(id: number, songUpdateRequest: SongUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SongResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSongApiV1SongIdPatch(id, songUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSongApiV1SongIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatch(id: number, songUpdateRequest: SongUpdateRequest, _options?: ConfigurationOptions): Observable<SongResponse> {
        return this.updateSongApiV1SongIdPatchWithHttpInfo(id, songUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<SongResponse>) => apiResponse.data));
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPostWithHttpInfo(file: string, _options?: ConfigurationOptions): Observable<HttpInfo<SongResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.uploadSongApiV1SongPost(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadSongApiV1SongPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPost(file: string, _options?: ConfigurationOptions): Observable<SongResponse> {
        return this.uploadSongApiV1SongPostWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<SongResponse>) => apiResponse.data));
    }

}
