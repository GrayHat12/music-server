import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableAlbumApi } from "./ObservableAPI";
import { AlbumApiRequestFactory, AlbumApiResponseProcessor} from "../apis/AlbumApi";

export interface AlbumApiCreateAlbumApiV1AlbumPostRequest {
    /**
     * 
     * @type AlbumCreateRequest
     * @memberof AlbumApicreateAlbumApiV1AlbumPost
     */
    albumCreateRequest: AlbumCreateRequest
}

export interface AlbumApiDeleteAlbumApiV1AlbumIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApideleteAlbumApiV1AlbumIdDelete
     */
    id: number
}

export interface AlbumApiGetAlbumApiV1AlbumIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApigetAlbumApiV1AlbumIdGet
     */
    id: number
}

export interface AlbumApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApigetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet
     */
    id: number
}

export interface AlbumApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApigetFeaturesFromAlbumApiV1AlbumIdFeaturesGet
     */
    id: number
}

export interface AlbumApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApigetGenresFromAlbumApiV1AlbumIdGenresGet
     */
    id: number
}

export interface AlbumApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApigetSongsFromAlbumApiV1AlbumIdSongsGet
     */
    id: number
}

export interface AlbumApiListAllAlbumsApiV1AlbumsGetRequest {
}

export interface AlbumApiUpdateAlbumApiV1AlbumIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlbumApiupdateAlbumApiV1AlbumIdPatch
     */
    id: number
    /**
     * 
     * @type AlbumUpdateRequest
     * @memberof AlbumApiupdateAlbumApiV1AlbumIdPatch
     */
    albumUpdateRequest: AlbumUpdateRequest
}

export class ObjectAlbumApi {
    private api: ObservableAlbumApi

    public constructor(configuration: Configuration, requestFactory?: AlbumApiRequestFactory, responseProcessor?: AlbumApiResponseProcessor) {
        this.api = new ObservableAlbumApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Album
     * @param param the request object
     */
    public createAlbumApiV1AlbumPostWithHttpInfo(param: AlbumApiCreateAlbumApiV1AlbumPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        return this.api.createAlbumApiV1AlbumPostWithHttpInfo(param.albumCreateRequest,  options).toPromise();
    }

    /**
     * Create Album
     * @param param the request object
     */
    public createAlbumApiV1AlbumPost(param: AlbumApiCreateAlbumApiV1AlbumPostRequest, options?: ConfigurationOptions): Promise<AlbumResponse> {
        return this.api.createAlbumApiV1AlbumPost(param.albumCreateRequest,  options).toPromise();
    }

    /**
     * Delete Album
     * @param param the request object
     */
    public deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(param: AlbumApiDeleteAlbumApiV1AlbumIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Album
     * @param param the request object
     */
    public deleteAlbumApiV1AlbumIdDelete(param: AlbumApiDeleteAlbumApiV1AlbumIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteAlbumApiV1AlbumIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Album
     * @param param the request object
     */
    public getAlbumApiV1AlbumIdGetWithHttpInfo(param: AlbumApiGetAlbumApiV1AlbumIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        return this.api.getAlbumApiV1AlbumIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Album
     * @param param the request object
     */
    public getAlbumApiV1AlbumIdGet(param: AlbumApiGetAlbumApiV1AlbumIdGetRequest, options?: ConfigurationOptions): Promise<AlbumResponse> {
        return this.api.getAlbumApiV1AlbumIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param param the request object
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(param: AlbumApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param param the request object
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(param: AlbumApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Album
     * @param param the request object
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(param: AlbumApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Album
     * @param param the request object
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(param: AlbumApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Album
     * @param param the request object
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(param: AlbumApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Album
     * @param param the request object
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(param: AlbumApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromAlbumApiV1AlbumIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Album
     * @param param the request object
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(param: AlbumApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Album
     * @param param the request object
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(param: AlbumApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromAlbumApiV1AlbumIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * List All Albums
     * @param param the request object
     */
    public listAllAlbumsApiV1AlbumsGetWithHttpInfo(param: AlbumApiListAllAlbumsApiV1AlbumsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlbumResponse>>> {
        return this.api.listAllAlbumsApiV1AlbumsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Albums
     * @param param the request object
     */
    public listAllAlbumsApiV1AlbumsGet(param: AlbumApiListAllAlbumsApiV1AlbumsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<AlbumResponse>> {
        return this.api.listAllAlbumsApiV1AlbumsGet( options).toPromise();
    }

    /**
     * Update Album
     * @param param the request object
     */
    public updateAlbumApiV1AlbumIdPatchWithHttpInfo(param: AlbumApiUpdateAlbumApiV1AlbumIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        return this.api.updateAlbumApiV1AlbumIdPatchWithHttpInfo(param.id, param.albumUpdateRequest,  options).toPromise();
    }

    /**
     * Update Album
     * @param param the request object
     */
    public updateAlbumApiV1AlbumIdPatch(param: AlbumApiUpdateAlbumApiV1AlbumIdPatchRequest, options?: ConfigurationOptions): Promise<AlbumResponse> {
        return this.api.updateAlbumApiV1AlbumIdPatch(param.id, param.albumUpdateRequest,  options).toPromise();
    }

}

import { ObservableArtistApi } from "./ObservableAPI";
import { ArtistApiRequestFactory, ArtistApiResponseProcessor} from "../apis/ArtistApi";

export interface ArtistApiCreateArtistApiV1ArtistPostRequest {
    /**
     * 
     * @type ArtistCreateRequest
     * @memberof ArtistApicreateArtistApiV1ArtistPost
     */
    artistCreateRequest: ArtistCreateRequest
}

export interface ArtistApiDeleteArtistApiV1ArtistIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApideleteArtistApiV1ArtistIdDelete
     */
    id: number
}

export interface ArtistApiGetArtistApiV1ArtistIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetArtistApiV1ArtistIdGet
     */
    id: number
}

export interface ArtistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetArtistsFromPlaylistApiV1PlaylistIdArtistsGet
     */
    id: number
}

export interface ArtistApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetCollaborationsFromArtistApiV1ArtistIdCollaborationsGet
     */
    id: number
}

export interface ArtistApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetFeaturesFromAlbumApiV1AlbumIdFeaturesGet
     */
    id: number
}

export interface ArtistApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetFeaturesFromArtistApiV1ArtistIdFeaturesGet
     */
    id: number
}

export interface ArtistApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetFeaturesFromSongApiV1SongIdFeaturesGet
     */
    id: number
}

export interface ArtistApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetGenresFromArtistApiV1ArtistIdGenresGet
     */
    id: number
}

export interface ArtistApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApigetSongsFromArtistApiV1ArtistIdSongsGet
     */
    id: number
}

export interface ArtistApiListAllArtistApiV1ArtistsGetRequest {
}

export interface ArtistApiUpdateArtistApiV1ArtistIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArtistApiupdateArtistApiV1ArtistIdPatch
     */
    id: number
    /**
     * 
     * @type ArtistUpdateRequest
     * @memberof ArtistApiupdateArtistApiV1ArtistIdPatch
     */
    artistUpdateRequest: ArtistUpdateRequest
}

export class ObjectArtistApi {
    private api: ObservableArtistApi

    public constructor(configuration: Configuration, requestFactory?: ArtistApiRequestFactory, responseProcessor?: ArtistApiResponseProcessor) {
        this.api = new ObservableArtistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Artist
     * @param param the request object
     */
    public createArtistApiV1ArtistPostWithHttpInfo(param: ArtistApiCreateArtistApiV1ArtistPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        return this.api.createArtistApiV1ArtistPostWithHttpInfo(param.artistCreateRequest,  options).toPromise();
    }

    /**
     * Create Artist
     * @param param the request object
     */
    public createArtistApiV1ArtistPost(param: ArtistApiCreateArtistApiV1ArtistPostRequest, options?: ConfigurationOptions): Promise<ArtistResponse> {
        return this.api.createArtistApiV1ArtistPost(param.artistCreateRequest,  options).toPromise();
    }

    /**
     * Delete Artist
     * @param param the request object
     */
    public deleteArtistApiV1ArtistIdDeleteWithHttpInfo(param: ArtistApiDeleteArtistApiV1ArtistIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Artist
     * @param param the request object
     */
    public deleteArtistApiV1ArtistIdDelete(param: ArtistApiDeleteArtistApiV1ArtistIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteArtistApiV1ArtistIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Artist
     * @param param the request object
     */
    public getArtistApiV1ArtistIdGetWithHttpInfo(param: ArtistApiGetArtistApiV1ArtistIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        return this.api.getArtistApiV1ArtistIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Artist
     * @param param the request object
     */
    public getArtistApiV1ArtistIdGet(param: ArtistApiGetArtistApiV1ArtistIdGetRequest, options?: ConfigurationOptions): Promise<ArtistResponse> {
        return this.api.getArtistApiV1ArtistIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param param the request object
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(param: ArtistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param param the request object
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(param: ArtistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(param.id,  options).toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param param the request object
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(param: ArtistApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param param the request object
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(param: ArtistApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Album
     * @param param the request object
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(param: ArtistApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Album
     * @param param the request object
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(param: ArtistApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Artist
     * @param param the request object
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(param: ArtistApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Artist
     * @param param the request object
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(param: ArtistApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Song
     * @param param the request object
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(param: ArtistApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Song
     * @param param the request object
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(param: ArtistApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromSongApiV1SongIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Artist
     * @param param the request object
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(param: ArtistApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Artist
     * @param param the request object
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(param: ArtistApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromArtistApiV1ArtistIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Artist
     * @param param the request object
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(param: ArtistApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Artist
     * @param param the request object
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(param: ArtistApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromArtistApiV1ArtistIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * List All Artist
     * @param param the request object
     */
    public listAllArtistApiV1ArtistsGetWithHttpInfo(param: ArtistApiListAllArtistApiV1ArtistsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ArtistResponse>>> {
        return this.api.listAllArtistApiV1ArtistsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Artist
     * @param param the request object
     */
    public listAllArtistApiV1ArtistsGet(param: ArtistApiListAllArtistApiV1ArtistsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ArtistResponse>> {
        return this.api.listAllArtistApiV1ArtistsGet( options).toPromise();
    }

    /**
     * Update Artist
     * @param param the request object
     */
    public updateArtistApiV1ArtistIdPatchWithHttpInfo(param: ArtistApiUpdateArtistApiV1ArtistIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        return this.api.updateArtistApiV1ArtistIdPatchWithHttpInfo(param.id, param.artistUpdateRequest,  options).toPromise();
    }

    /**
     * Update Artist
     * @param param the request object
     */
    public updateArtistApiV1ArtistIdPatch(param: ArtistApiUpdateArtistApiV1ArtistIdPatchRequest, options?: ConfigurationOptions): Promise<ArtistResponse> {
        return this.api.updateArtistApiV1ArtistIdPatch(param.id, param.artistUpdateRequest,  options).toPromise();
    }

}

import { ObservableDatabaseApi } from "./ObservableAPI";
import { DatabaseApiRequestFactory, DatabaseApiResponseProcessor} from "../apis/DatabaseApi";

export interface DatabaseApiSetDatabaseApiV1DbPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabaseApisetDatabaseApiV1DbPatch
     */
    path: string
}

export class ObjectDatabaseApi {
    private api: ObservableDatabaseApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseApiRequestFactory, responseProcessor?: DatabaseApiResponseProcessor) {
        this.api = new ObservableDatabaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set Database
     * @param param the request object
     */
    public setDatabaseApiV1DbPatchWithHttpInfo(param: DatabaseApiSetDatabaseApiV1DbPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<boolean>> {
        return this.api.setDatabaseApiV1DbPatchWithHttpInfo(param.path,  options).toPromise();
    }

    /**
     * Set Database
     * @param param the request object
     */
    public setDatabaseApiV1DbPatch(param: DatabaseApiSetDatabaseApiV1DbPatchRequest, options?: ConfigurationOptions): Promise<boolean> {
        return this.api.setDatabaseApiV1DbPatch(param.path,  options).toPromise();
    }

}

import { ObservableGenreApi } from "./ObservableAPI";
import { GenreApiRequestFactory, GenreApiResponseProcessor} from "../apis/GenreApi";

export interface GenreApiCreateGenreApiV1GenrePostRequest {
    /**
     * 
     * @type GenreCreateRequest
     * @memberof GenreApicreateGenreApiV1GenrePost
     */
    genreCreateRequest: GenreCreateRequest
}

export interface GenreApiDeleteGenreApiV1GenreIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApideleteGenreApiV1GenreIdDelete
     */
    id: number
}

export interface GenreApiGetGenreApiV1GenreIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApigetGenreApiV1GenreIdGet
     */
    id: number
}

export interface GenreApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApigetGenresFromAlbumApiV1AlbumIdGenresGet
     */
    id: number
}

export interface GenreApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApigetGenresFromArtistApiV1ArtistIdGenresGet
     */
    id: number
}

export interface GenreApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApigetGenresFromPlaylistApiV1PlaylistIdGenresGet
     */
    id: number
}

export interface GenreApiGetSongsFromGenreApiV1GenreIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApigetSongsFromGenreApiV1GenreIdSongsGet
     */
    id: number
}

export interface GenreApiListAllGenresApiV1GenresGetRequest {
}

export interface GenreApiUpdateGenreApiV1GenreIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GenreApiupdateGenreApiV1GenreIdPatch
     */
    id: number
    /**
     * 
     * @type GenreUpdateRequest
     * @memberof GenreApiupdateGenreApiV1GenreIdPatch
     */
    genreUpdateRequest: GenreUpdateRequest
}

export class ObjectGenreApi {
    private api: ObservableGenreApi

    public constructor(configuration: Configuration, requestFactory?: GenreApiRequestFactory, responseProcessor?: GenreApiResponseProcessor) {
        this.api = new ObservableGenreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Genre
     * @param param the request object
     */
    public createGenreApiV1GenrePostWithHttpInfo(param: GenreApiCreateGenreApiV1GenrePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<GenreResponse>> {
        return this.api.createGenreApiV1GenrePostWithHttpInfo(param.genreCreateRequest,  options).toPromise();
    }

    /**
     * Create Genre
     * @param param the request object
     */
    public createGenreApiV1GenrePost(param: GenreApiCreateGenreApiV1GenrePostRequest, options?: ConfigurationOptions): Promise<GenreResponse> {
        return this.api.createGenreApiV1GenrePost(param.genreCreateRequest,  options).toPromise();
    }

    /**
     * Delete Genre
     * @param param the request object
     */
    public deleteGenreApiV1GenreIdDeleteWithHttpInfo(param: GenreApiDeleteGenreApiV1GenreIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteGenreApiV1GenreIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Genre
     * @param param the request object
     */
    public deleteGenreApiV1GenreIdDelete(param: GenreApiDeleteGenreApiV1GenreIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteGenreApiV1GenreIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Genre
     * @param param the request object
     */
    public getGenreApiV1GenreIdGetWithHttpInfo(param: GenreApiGetGenreApiV1GenreIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<GenreResponse>> {
        return this.api.getGenreApiV1GenreIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genre
     * @param param the request object
     */
    public getGenreApiV1GenreIdGet(param: GenreApiGetGenreApiV1GenreIdGetRequest, options?: ConfigurationOptions): Promise<GenreResponse> {
        return this.api.getGenreApiV1GenreIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Album
     * @param param the request object
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(param: GenreApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Album
     * @param param the request object
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(param: GenreApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromAlbumApiV1AlbumIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Artist
     * @param param the request object
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(param: GenreApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Artist
     * @param param the request object
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(param: GenreApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromArtistApiV1ArtistIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param param the request object
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(param: GenreApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param param the request object
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(param: GenreApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Genre
     * @param param the request object
     */
    public getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(param: GenreApiGetSongsFromGenreApiV1GenreIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Genre
     * @param param the request object
     */
    public getSongsFromGenreApiV1GenreIdSongsGet(param: GenreApiGetSongsFromGenreApiV1GenreIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromGenreApiV1GenreIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * List All Genres
     * @param param the request object
     */
    public listAllGenresApiV1GenresGetWithHttpInfo(param: GenreApiListAllGenresApiV1GenresGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<GenreResponse>>> {
        return this.api.listAllGenresApiV1GenresGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Genres
     * @param param the request object
     */
    public listAllGenresApiV1GenresGet(param: GenreApiListAllGenresApiV1GenresGetRequest = {}, options?: ConfigurationOptions): Promise<Array<GenreResponse>> {
        return this.api.listAllGenresApiV1GenresGet( options).toPromise();
    }

    /**
     * Update Genre
     * @param param the request object
     */
    public updateGenreApiV1GenreIdPatchWithHttpInfo(param: GenreApiUpdateGenreApiV1GenreIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<GenreResponse>> {
        return this.api.updateGenreApiV1GenreIdPatchWithHttpInfo(param.id, param.genreUpdateRequest,  options).toPromise();
    }

    /**
     * Update Genre
     * @param param the request object
     */
    public updateGenreApiV1GenreIdPatch(param: GenreApiUpdateGenreApiV1GenreIdPatchRequest, options?: ConfigurationOptions): Promise<GenreResponse> {
        return this.api.updateGenreApiV1GenreIdPatch(param.id, param.genreUpdateRequest,  options).toPromise();
    }

}

import { ObservableImageApi } from "./ObservableAPI";
import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";

export interface ImageApiAddImageApiV1ImagePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImageApiaddImageApiV1ImagePost
     */
    file: string
}

export interface ImageApiDeleteImageApiV1ImageIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ImageApideleteImageApiV1ImageIdDelete
     */
    id: number
}

export interface ImageApiGetImageApiV1ImageIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ImageApigetImageApiV1ImageIdGet
     */
    id: number
}

export class ObjectImageApi {
    private api: ObservableImageApi

    public constructor(configuration: Configuration, requestFactory?: ImageApiRequestFactory, responseProcessor?: ImageApiResponseProcessor) {
        this.api = new ObservableImageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Image
     * @param param the request object
     */
    public addImageApiV1ImagePostWithHttpInfo(param: ImageApiAddImageApiV1ImagePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<number>> {
        return this.api.addImageApiV1ImagePostWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Add Image
     * @param param the request object
     */
    public addImageApiV1ImagePost(param: ImageApiAddImageApiV1ImagePostRequest, options?: ConfigurationOptions): Promise<number> {
        return this.api.addImageApiV1ImagePost(param.file,  options).toPromise();
    }

    /**
     * Delete Image
     * @param param the request object
     */
    public deleteImageApiV1ImageIdDeleteWithHttpInfo(param: ImageApiDeleteImageApiV1ImageIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteImageApiV1ImageIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Image
     * @param param the request object
     */
    public deleteImageApiV1ImageIdDelete(param: ImageApiDeleteImageApiV1ImageIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteImageApiV1ImageIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Image
     * @param param the request object
     */
    public getImageApiV1ImageIdGetWithHttpInfo(param: ImageApiGetImageApiV1ImageIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.getImageApiV1ImageIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Image
     * @param param the request object
     */
    public getImageApiV1ImageIdGet(param: ImageApiGetImageApiV1ImageIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.getImageApiV1ImageIdGet(param.id,  options).toPromise();
    }

}

import { ObservablePlaylistApi } from "./ObservableAPI";
import { PlaylistApiRequestFactory, PlaylistApiResponseProcessor} from "../apis/PlaylistApi";

export interface PlaylistApiCreatePlaylistApiV1PlaylistPostRequest {
    /**
     * 
     * @type PlaylistCreateRequest
     * @memberof PlaylistApicreatePlaylistApiV1PlaylistPost
     */
    playlistCreateRequest: PlaylistCreateRequest
}

export interface PlaylistApiDeletePlaylistApiV1PlaylistIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApideletePlaylistApiV1PlaylistIdDelete
     */
    id: number
}

export interface PlaylistApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApigetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet
     */
    id: number
}

export interface PlaylistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApigetArtistsFromPlaylistApiV1PlaylistIdArtistsGet
     */
    id: number
}

export interface PlaylistApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApigetGenresFromPlaylistApiV1PlaylistIdGenresGet
     */
    id: number
}

export interface PlaylistApiGetPlaylistApiV1PlaylistIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApigetPlaylistApiV1PlaylistIdGet
     */
    id: number
}

export interface PlaylistApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApigetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet
     */
    id: number
}

export interface PlaylistApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApigetSongsFromPlaylistApiV1PlaylistIdSongsGet
     */
    id: number
}

export interface PlaylistApiListAllPlaylistsApiV1PlaylistsGetRequest {
}

export interface PlaylistApiUpdatePlaylistApiV1PlaylistIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PlaylistApiupdatePlaylistApiV1PlaylistIdPatch
     */
    id: number
    /**
     * 
     * @type PlaylistUpdateRequest
     * @memberof PlaylistApiupdatePlaylistApiV1PlaylistIdPatch
     */
    playlistUpdateRequest: PlaylistUpdateRequest
}

export class ObjectPlaylistApi {
    private api: ObservablePlaylistApi

    public constructor(configuration: Configuration, requestFactory?: PlaylistApiRequestFactory, responseProcessor?: PlaylistApiResponseProcessor) {
        this.api = new ObservablePlaylistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Playlist
     * @param param the request object
     */
    public createPlaylistApiV1PlaylistPostWithHttpInfo(param: PlaylistApiCreatePlaylistApiV1PlaylistPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.createPlaylistApiV1PlaylistPostWithHttpInfo(param.playlistCreateRequest,  options).toPromise();
    }

    /**
     * Create Playlist
     * @param param the request object
     */
    public createPlaylistApiV1PlaylistPost(param: PlaylistApiCreatePlaylistApiV1PlaylistPostRequest, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.createPlaylistApiV1PlaylistPost(param.playlistCreateRequest,  options).toPromise();
    }

    /**
     * Delete Playlist
     * @param param the request object
     */
    public deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(param: PlaylistApiDeletePlaylistApiV1PlaylistIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Playlist
     * @param param the request object
     */
    public deletePlaylistApiV1PlaylistIdDelete(param: PlaylistApiDeletePlaylistApiV1PlaylistIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deletePlaylistApiV1PlaylistIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param param the request object
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(param: PlaylistApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param param the request object
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(param: PlaylistApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(param.id,  options).toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param param the request object
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(param: PlaylistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param param the request object
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(param: PlaylistApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param param the request object
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(param: PlaylistApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param param the request object
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(param: PlaylistApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Playlist
     * @param param the request object
     */
    public getPlaylistApiV1PlaylistIdGetWithHttpInfo(param: PlaylistApiGetPlaylistApiV1PlaylistIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.getPlaylistApiV1PlaylistIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Playlist
     * @param param the request object
     */
    public getPlaylistApiV1PlaylistIdGet(param: PlaylistApiGetPlaylistApiV1PlaylistIdGetRequest, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.getPlaylistApiV1PlaylistIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param param the request object
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(param: PlaylistApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param param the request object
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(param: PlaylistApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param param the request object
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(param: PlaylistApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param param the request object
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(param: PlaylistApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * List All Playlists
     * @param param the request object
     */
    public listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(param: PlaylistApiListAllPlaylistsApiV1PlaylistsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Playlists
     * @param param the request object
     */
    public listAllPlaylistsApiV1PlaylistsGet(param: PlaylistApiListAllPlaylistsApiV1PlaylistsGetRequest = {}, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.listAllPlaylistsApiV1PlaylistsGet( options).toPromise();
    }

    /**
     * Update Playlist
     * @param param the request object
     */
    public updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(param: PlaylistApiUpdatePlaylistApiV1PlaylistIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(param.id, param.playlistUpdateRequest,  options).toPromise();
    }

    /**
     * Update Playlist
     * @param param the request object
     */
    public updatePlaylistApiV1PlaylistIdPatch(param: PlaylistApiUpdatePlaylistApiV1PlaylistIdPatchRequest, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.updatePlaylistApiV1PlaylistIdPatch(param.id, param.playlistUpdateRequest,  options).toPromise();
    }

}

import { ObservableSongApi } from "./ObservableAPI";
import { SongApiRequestFactory, SongApiResponseProcessor} from "../apis/SongApi";

export interface SongApiDeleteSongApiV1SongIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApideleteSongApiV1SongIdDelete
     */
    id: number
}

export interface SongApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetFeaturesFromArtistApiV1ArtistIdFeaturesGet
     */
    id: number
}

export interface SongApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetFeaturesFromSongApiV1SongIdFeaturesGet
     */
    id: number
}

export interface SongApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet
     */
    id: number
}

export interface SongApiGetSongApiV1SongIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetSongApiV1SongIdGet
     */
    id: number
}

export interface SongApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetSongsFromAlbumApiV1AlbumIdSongsGet
     */
    id: number
}

export interface SongApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetSongsFromArtistApiV1ArtistIdSongsGet
     */
    id: number
}

export interface SongApiGetSongsFromGenreApiV1GenreIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetSongsFromGenreApiV1GenreIdSongsGet
     */
    id: number
}

export interface SongApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApigetSongsFromPlaylistApiV1PlaylistIdSongsGet
     */
    id: number
}

export interface SongApiListAllSongApiV1SongsGetRequest {
}

export interface SongApiStreamSongApiV1SongIdStreamGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApistreamSongApiV1SongIdStreamGet
     */
    id: number
}

export interface SongApiUpdateSongApiV1SongIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SongApiupdateSongApiV1SongIdPatch
     */
    id: number
    /**
     * 
     * @type SongUpdateRequest
     * @memberof SongApiupdateSongApiV1SongIdPatch
     */
    songUpdateRequest: SongUpdateRequest
}

export interface SongApiUploadSongApiV1SongPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SongApiuploadSongApiV1SongPost
     */
    file: string
}

export class ObjectSongApi {
    private api: ObservableSongApi

    public constructor(configuration: Configuration, requestFactory?: SongApiRequestFactory, responseProcessor?: SongApiResponseProcessor) {
        this.api = new ObservableSongApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Song
     * @param param the request object
     */
    public deleteSongApiV1SongIdDeleteWithHttpInfo(param: SongApiDeleteSongApiV1SongIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteSongApiV1SongIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Song
     * @param param the request object
     */
    public deleteSongApiV1SongIdDelete(param: SongApiDeleteSongApiV1SongIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteSongApiV1SongIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Features From Artist
     * @param param the request object
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(param: SongApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Artist
     * @param param the request object
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(param: SongApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Song
     * @param param the request object
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(param: SongApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Song
     * @param param the request object
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(param: SongApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromSongApiV1SongIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param param the request object
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(param: SongApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param param the request object
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(param: SongApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(param.id,  options).toPromise();
    }

    /**
     * Get Song
     * @param param the request object
     */
    public getSongApiV1SongIdGetWithHttpInfo(param: SongApiGetSongApiV1SongIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        return this.api.getSongApiV1SongIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Song
     * @param param the request object
     */
    public getSongApiV1SongIdGet(param: SongApiGetSongApiV1SongIdGetRequest, options?: ConfigurationOptions): Promise<SongResponse> {
        return this.api.getSongApiV1SongIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Album
     * @param param the request object
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(param: SongApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Album
     * @param param the request object
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(param: SongApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromAlbumApiV1AlbumIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Artist
     * @param param the request object
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(param: SongApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Artist
     * @param param the request object
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(param: SongApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromArtistApiV1ArtistIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Genre
     * @param param the request object
     */
    public getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(param: SongApiGetSongsFromGenreApiV1GenreIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Genre
     * @param param the request object
     */
    public getSongsFromGenreApiV1GenreIdSongsGet(param: SongApiGetSongsFromGenreApiV1GenreIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromGenreApiV1GenreIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param param the request object
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(param: SongApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param param the request object
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(param: SongApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * List All Song
     * @param param the request object
     */
    public listAllSongApiV1SongsGetWithHttpInfo(param: SongApiListAllSongApiV1SongsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<SongResponse>>> {
        return this.api.listAllSongApiV1SongsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Song
     * @param param the request object
     */
    public listAllSongApiV1SongsGet(param: SongApiListAllSongApiV1SongsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<SongResponse>> {
        return this.api.listAllSongApiV1SongsGet( options).toPromise();
    }

    /**
     * Stream Song
     * @param param the request object
     */
    public streamSongApiV1SongIdStreamGetWithHttpInfo(param: SongApiStreamSongApiV1SongIdStreamGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.streamSongApiV1SongIdStreamGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Stream Song
     * @param param the request object
     */
    public streamSongApiV1SongIdStreamGet(param: SongApiStreamSongApiV1SongIdStreamGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.streamSongApiV1SongIdStreamGet(param.id,  options).toPromise();
    }

    /**
     * Update Song
     * @param param the request object
     */
    public updateSongApiV1SongIdPatchWithHttpInfo(param: SongApiUpdateSongApiV1SongIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        return this.api.updateSongApiV1SongIdPatchWithHttpInfo(param.id, param.songUpdateRequest,  options).toPromise();
    }

    /**
     * Update Song
     * @param param the request object
     */
    public updateSongApiV1SongIdPatch(param: SongApiUpdateSongApiV1SongIdPatchRequest, options?: ConfigurationOptions): Promise<SongResponse> {
        return this.api.updateSongApiV1SongIdPatch(param.id, param.songUpdateRequest,  options).toPromise();
    }

    /**
     * Upload Song
     * @param param the request object
     */
    public uploadSongApiV1SongPostWithHttpInfo(param: SongApiUploadSongApiV1SongPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        return this.api.uploadSongApiV1SongPostWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Upload Song
     * @param param the request object
     */
    public uploadSongApiV1SongPost(param: SongApiUploadSongApiV1SongPostRequest, options?: ConfigurationOptions): Promise<SongResponse> {
        return this.api.uploadSongApiV1SongPost(param.file,  options).toPromise();
    }

}

import { ObservableV1Api } from "./ObservableAPI";
import { V1ApiRequestFactory, V1ApiResponseProcessor} from "../apis/V1Api";

export interface V1ApiAddImageApiV1ImagePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof V1ApiaddImageApiV1ImagePost
     */
    file: string
}

export interface V1ApiCreateAlbumApiV1AlbumPostRequest {
    /**
     * 
     * @type AlbumCreateRequest
     * @memberof V1ApicreateAlbumApiV1AlbumPost
     */
    albumCreateRequest: AlbumCreateRequest
}

export interface V1ApiCreateArtistApiV1ArtistPostRequest {
    /**
     * 
     * @type ArtistCreateRequest
     * @memberof V1ApicreateArtistApiV1ArtistPost
     */
    artistCreateRequest: ArtistCreateRequest
}

export interface V1ApiCreateGenreApiV1GenrePostRequest {
    /**
     * 
     * @type GenreCreateRequest
     * @memberof V1ApicreateGenreApiV1GenrePost
     */
    genreCreateRequest: GenreCreateRequest
}

export interface V1ApiCreatePlaylistApiV1PlaylistPostRequest {
    /**
     * 
     * @type PlaylistCreateRequest
     * @memberof V1ApicreatePlaylistApiV1PlaylistPost
     */
    playlistCreateRequest: PlaylistCreateRequest
}

export interface V1ApiDeleteAlbumApiV1AlbumIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApideleteAlbumApiV1AlbumIdDelete
     */
    id: number
}

export interface V1ApiDeleteArtistApiV1ArtistIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApideleteArtistApiV1ArtistIdDelete
     */
    id: number
}

export interface V1ApiDeleteGenreApiV1GenreIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApideleteGenreApiV1GenreIdDelete
     */
    id: number
}

export interface V1ApiDeleteImageApiV1ImageIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApideleteImageApiV1ImageIdDelete
     */
    id: number
}

export interface V1ApiDeletePlaylistApiV1PlaylistIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApideletePlaylistApiV1PlaylistIdDelete
     */
    id: number
}

export interface V1ApiDeleteSongApiV1SongIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApideleteSongApiV1SongIdDelete
     */
    id: number
}

export interface V1ApiGetAlbumApiV1AlbumIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetAlbumApiV1AlbumIdGet
     */
    id: number
}

export interface V1ApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet
     */
    id: number
}

export interface V1ApiGetArtistApiV1ArtistIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetArtistApiV1ArtistIdGet
     */
    id: number
}

export interface V1ApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetArtistsFromPlaylistApiV1PlaylistIdArtistsGet
     */
    id: number
}

export interface V1ApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetCollaborationsFromArtistApiV1ArtistIdCollaborationsGet
     */
    id: number
}

export interface V1ApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetFeaturesFromAlbumApiV1AlbumIdFeaturesGet
     */
    id: number
}

export interface V1ApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetFeaturesFromArtistApiV1ArtistIdFeaturesGet
     */
    id: number
}

export interface V1ApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetFeaturesFromSongApiV1SongIdFeaturesGet
     */
    id: number
}

export interface V1ApiGetGenreApiV1GenreIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetGenreApiV1GenreIdGet
     */
    id: number
}

export interface V1ApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetGenresFromAlbumApiV1AlbumIdGenresGet
     */
    id: number
}

export interface V1ApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetGenresFromArtistApiV1ArtistIdGenresGet
     */
    id: number
}

export interface V1ApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetGenresFromPlaylistApiV1PlaylistIdGenresGet
     */
    id: number
}

export interface V1ApiGetImageApiV1ImageIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetImageApiV1ImageIdGet
     */
    id: number
}

export interface V1ApiGetPlaylistApiV1PlaylistIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetPlaylistApiV1PlaylistIdGet
     */
    id: number
}

export interface V1ApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet
     */
    id: number
}

export interface V1ApiGetSongApiV1SongIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetSongApiV1SongIdGet
     */
    id: number
}

export interface V1ApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetSongsFromAlbumApiV1AlbumIdSongsGet
     */
    id: number
}

export interface V1ApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetSongsFromArtistApiV1ArtistIdSongsGet
     */
    id: number
}

export interface V1ApiGetSongsFromGenreApiV1GenreIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetSongsFromGenreApiV1GenreIdSongsGet
     */
    id: number
}

export interface V1ApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApigetSongsFromPlaylistApiV1PlaylistIdSongsGet
     */
    id: number
}

export interface V1ApiListAllAlbumsApiV1AlbumsGetRequest {
}

export interface V1ApiListAllArtistApiV1ArtistsGetRequest {
}

export interface V1ApiListAllGenresApiV1GenresGetRequest {
}

export interface V1ApiListAllPlaylistsApiV1PlaylistsGetRequest {
}

export interface V1ApiListAllSongApiV1SongsGetRequest {
}

export interface V1ApiSetDatabaseApiV1DbPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof V1ApisetDatabaseApiV1DbPatch
     */
    path: string
}

export interface V1ApiStreamSongApiV1SongIdStreamGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApistreamSongApiV1SongIdStreamGet
     */
    id: number
}

export interface V1ApiUpdateAlbumApiV1AlbumIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApiupdateAlbumApiV1AlbumIdPatch
     */
    id: number
    /**
     * 
     * @type AlbumUpdateRequest
     * @memberof V1ApiupdateAlbumApiV1AlbumIdPatch
     */
    albumUpdateRequest: AlbumUpdateRequest
}

export interface V1ApiUpdateArtistApiV1ArtistIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApiupdateArtistApiV1ArtistIdPatch
     */
    id: number
    /**
     * 
     * @type ArtistUpdateRequest
     * @memberof V1ApiupdateArtistApiV1ArtistIdPatch
     */
    artistUpdateRequest: ArtistUpdateRequest
}

export interface V1ApiUpdateGenreApiV1GenreIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApiupdateGenreApiV1GenreIdPatch
     */
    id: number
    /**
     * 
     * @type GenreUpdateRequest
     * @memberof V1ApiupdateGenreApiV1GenreIdPatch
     */
    genreUpdateRequest: GenreUpdateRequest
}

export interface V1ApiUpdatePlaylistApiV1PlaylistIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApiupdatePlaylistApiV1PlaylistIdPatch
     */
    id: number
    /**
     * 
     * @type PlaylistUpdateRequest
     * @memberof V1ApiupdatePlaylistApiV1PlaylistIdPatch
     */
    playlistUpdateRequest: PlaylistUpdateRequest
}

export interface V1ApiUpdateSongApiV1SongIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof V1ApiupdateSongApiV1SongIdPatch
     */
    id: number
    /**
     * 
     * @type SongUpdateRequest
     * @memberof V1ApiupdateSongApiV1SongIdPatch
     */
    songUpdateRequest: SongUpdateRequest
}

export interface V1ApiUploadSongApiV1SongPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof V1ApiuploadSongApiV1SongPost
     */
    file: string
}

export class ObjectV1Api {
    private api: ObservableV1Api

    public constructor(configuration: Configuration, requestFactory?: V1ApiRequestFactory, responseProcessor?: V1ApiResponseProcessor) {
        this.api = new ObservableV1Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Image
     * @param param the request object
     */
    public addImageApiV1ImagePostWithHttpInfo(param: V1ApiAddImageApiV1ImagePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<number>> {
        return this.api.addImageApiV1ImagePostWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Add Image
     * @param param the request object
     */
    public addImageApiV1ImagePost(param: V1ApiAddImageApiV1ImagePostRequest, options?: ConfigurationOptions): Promise<number> {
        return this.api.addImageApiV1ImagePost(param.file,  options).toPromise();
    }

    /**
     * Create Album
     * @param param the request object
     */
    public createAlbumApiV1AlbumPostWithHttpInfo(param: V1ApiCreateAlbumApiV1AlbumPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        return this.api.createAlbumApiV1AlbumPostWithHttpInfo(param.albumCreateRequest,  options).toPromise();
    }

    /**
     * Create Album
     * @param param the request object
     */
    public createAlbumApiV1AlbumPost(param: V1ApiCreateAlbumApiV1AlbumPostRequest, options?: ConfigurationOptions): Promise<AlbumResponse> {
        return this.api.createAlbumApiV1AlbumPost(param.albumCreateRequest,  options).toPromise();
    }

    /**
     * Create Artist
     * @param param the request object
     */
    public createArtistApiV1ArtistPostWithHttpInfo(param: V1ApiCreateArtistApiV1ArtistPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        return this.api.createArtistApiV1ArtistPostWithHttpInfo(param.artistCreateRequest,  options).toPromise();
    }

    /**
     * Create Artist
     * @param param the request object
     */
    public createArtistApiV1ArtistPost(param: V1ApiCreateArtistApiV1ArtistPostRequest, options?: ConfigurationOptions): Promise<ArtistResponse> {
        return this.api.createArtistApiV1ArtistPost(param.artistCreateRequest,  options).toPromise();
    }

    /**
     * Create Genre
     * @param param the request object
     */
    public createGenreApiV1GenrePostWithHttpInfo(param: V1ApiCreateGenreApiV1GenrePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<GenreResponse>> {
        return this.api.createGenreApiV1GenrePostWithHttpInfo(param.genreCreateRequest,  options).toPromise();
    }

    /**
     * Create Genre
     * @param param the request object
     */
    public createGenreApiV1GenrePost(param: V1ApiCreateGenreApiV1GenrePostRequest, options?: ConfigurationOptions): Promise<GenreResponse> {
        return this.api.createGenreApiV1GenrePost(param.genreCreateRequest,  options).toPromise();
    }

    /**
     * Create Playlist
     * @param param the request object
     */
    public createPlaylistApiV1PlaylistPostWithHttpInfo(param: V1ApiCreatePlaylistApiV1PlaylistPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.createPlaylistApiV1PlaylistPostWithHttpInfo(param.playlistCreateRequest,  options).toPromise();
    }

    /**
     * Create Playlist
     * @param param the request object
     */
    public createPlaylistApiV1PlaylistPost(param: V1ApiCreatePlaylistApiV1PlaylistPostRequest, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.createPlaylistApiV1PlaylistPost(param.playlistCreateRequest,  options).toPromise();
    }

    /**
     * Delete Album
     * @param param the request object
     */
    public deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(param: V1ApiDeleteAlbumApiV1AlbumIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Album
     * @param param the request object
     */
    public deleteAlbumApiV1AlbumIdDelete(param: V1ApiDeleteAlbumApiV1AlbumIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteAlbumApiV1AlbumIdDelete(param.id,  options).toPromise();
    }

    /**
     * Delete Artist
     * @param param the request object
     */
    public deleteArtistApiV1ArtistIdDeleteWithHttpInfo(param: V1ApiDeleteArtistApiV1ArtistIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Artist
     * @param param the request object
     */
    public deleteArtistApiV1ArtistIdDelete(param: V1ApiDeleteArtistApiV1ArtistIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteArtistApiV1ArtistIdDelete(param.id,  options).toPromise();
    }

    /**
     * Delete Genre
     * @param param the request object
     */
    public deleteGenreApiV1GenreIdDeleteWithHttpInfo(param: V1ApiDeleteGenreApiV1GenreIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteGenreApiV1GenreIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Genre
     * @param param the request object
     */
    public deleteGenreApiV1GenreIdDelete(param: V1ApiDeleteGenreApiV1GenreIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteGenreApiV1GenreIdDelete(param.id,  options).toPromise();
    }

    /**
     * Delete Image
     * @param param the request object
     */
    public deleteImageApiV1ImageIdDeleteWithHttpInfo(param: V1ApiDeleteImageApiV1ImageIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteImageApiV1ImageIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Image
     * @param param the request object
     */
    public deleteImageApiV1ImageIdDelete(param: V1ApiDeleteImageApiV1ImageIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteImageApiV1ImageIdDelete(param.id,  options).toPromise();
    }

    /**
     * Delete Playlist
     * @param param the request object
     */
    public deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(param: V1ApiDeletePlaylistApiV1PlaylistIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Playlist
     * @param param the request object
     */
    public deletePlaylistApiV1PlaylistIdDelete(param: V1ApiDeletePlaylistApiV1PlaylistIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deletePlaylistApiV1PlaylistIdDelete(param.id,  options).toPromise();
    }

    /**
     * Delete Song
     * @param param the request object
     */
    public deleteSongApiV1SongIdDeleteWithHttpInfo(param: V1ApiDeleteSongApiV1SongIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        return this.api.deleteSongApiV1SongIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Song
     * @param param the request object
     */
    public deleteSongApiV1SongIdDelete(param: V1ApiDeleteSongApiV1SongIdDeleteRequest, options?: ConfigurationOptions): Promise<DeletedResponse> {
        return this.api.deleteSongApiV1SongIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get Album
     * @param param the request object
     */
    public getAlbumApiV1AlbumIdGetWithHttpInfo(param: V1ApiGetAlbumApiV1AlbumIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        return this.api.getAlbumApiV1AlbumIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Album
     * @param param the request object
     */
    public getAlbumApiV1AlbumIdGet(param: V1ApiGetAlbumApiV1AlbumIdGetRequest, options?: ConfigurationOptions): Promise<AlbumResponse> {
        return this.api.getAlbumApiV1AlbumIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param param the request object
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(param: V1ApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param param the request object
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(param: V1ApiGetAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(param.id,  options).toPromise();
    }

    /**
     * Get Artist
     * @param param the request object
     */
    public getArtistApiV1ArtistIdGetWithHttpInfo(param: V1ApiGetArtistApiV1ArtistIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        return this.api.getArtistApiV1ArtistIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Artist
     * @param param the request object
     */
    public getArtistApiV1ArtistIdGet(param: V1ApiGetArtistApiV1ArtistIdGetRequest, options?: ConfigurationOptions): Promise<ArtistResponse> {
        return this.api.getArtistApiV1ArtistIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param param the request object
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(param: V1ApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param param the request object
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(param: V1ApiGetArtistsFromPlaylistApiV1PlaylistIdArtistsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(param.id,  options).toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param param the request object
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(param: V1ApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param param the request object
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(param: V1ApiGetCollaborationsFromArtistApiV1ArtistIdCollaborationsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Album
     * @param param the request object
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(param: V1ApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Album
     * @param param the request object
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(param: V1ApiGetFeaturesFromAlbumApiV1AlbumIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Artist
     * @param param the request object
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(param: V1ApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Artist
     * @param param the request object
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(param: V1ApiGetFeaturesFromArtistApiV1ArtistIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Features From Song
     * @param param the request object
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(param: V1ApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Features From Song
     * @param param the request object
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(param: V1ApiGetFeaturesFromSongApiV1SongIdFeaturesGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getFeaturesFromSongApiV1SongIdFeaturesGet(param.id,  options).toPromise();
    }

    /**
     * Get Genre
     * @param param the request object
     */
    public getGenreApiV1GenreIdGetWithHttpInfo(param: V1ApiGetGenreApiV1GenreIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<GenreResponse>> {
        return this.api.getGenreApiV1GenreIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genre
     * @param param the request object
     */
    public getGenreApiV1GenreIdGet(param: V1ApiGetGenreApiV1GenreIdGetRequest, options?: ConfigurationOptions): Promise<GenreResponse> {
        return this.api.getGenreApiV1GenreIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Album
     * @param param the request object
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(param: V1ApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Album
     * @param param the request object
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(param: V1ApiGetGenresFromAlbumApiV1AlbumIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromAlbumApiV1AlbumIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Artist
     * @param param the request object
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(param: V1ApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Artist
     * @param param the request object
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(param: V1ApiGetGenresFromArtistApiV1ArtistIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromArtistApiV1ArtistIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param param the request object
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(param: V1ApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param param the request object
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(param: V1ApiGetGenresFromPlaylistApiV1PlaylistIdGenresGetRequest, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(param.id,  options).toPromise();
    }

    /**
     * Get Image
     * @param param the request object
     */
    public getImageApiV1ImageIdGetWithHttpInfo(param: V1ApiGetImageApiV1ImageIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.getImageApiV1ImageIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Image
     * @param param the request object
     */
    public getImageApiV1ImageIdGet(param: V1ApiGetImageApiV1ImageIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.getImageApiV1ImageIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Playlist
     * @param param the request object
     */
    public getPlaylistApiV1PlaylistIdGetWithHttpInfo(param: V1ApiGetPlaylistApiV1PlaylistIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.getPlaylistApiV1PlaylistIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Playlist
     * @param param the request object
     */
    public getPlaylistApiV1PlaylistIdGet(param: V1ApiGetPlaylistApiV1PlaylistIdGetRequest, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.getPlaylistApiV1PlaylistIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param param the request object
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(param: V1ApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param param the request object
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(param: V1ApiGetPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(param.id,  options).toPromise();
    }

    /**
     * Get Song
     * @param param the request object
     */
    public getSongApiV1SongIdGetWithHttpInfo(param: V1ApiGetSongApiV1SongIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        return this.api.getSongApiV1SongIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Song
     * @param param the request object
     */
    public getSongApiV1SongIdGet(param: V1ApiGetSongApiV1SongIdGetRequest, options?: ConfigurationOptions): Promise<SongResponse> {
        return this.api.getSongApiV1SongIdGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Album
     * @param param the request object
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(param: V1ApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Album
     * @param param the request object
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(param: V1ApiGetSongsFromAlbumApiV1AlbumIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromAlbumApiV1AlbumIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Artist
     * @param param the request object
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(param: V1ApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Artist
     * @param param the request object
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(param: V1ApiGetSongsFromArtistApiV1ArtistIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromArtistApiV1ArtistIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Genre
     * @param param the request object
     */
    public getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(param: V1ApiGetSongsFromGenreApiV1GenreIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromGenreApiV1GenreIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Genre
     * @param param the request object
     */
    public getSongsFromGenreApiV1GenreIdSongsGet(param: V1ApiGetSongsFromGenreApiV1GenreIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromGenreApiV1GenreIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param param the request object
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(param: V1ApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        return this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param param the request object
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(param: V1ApiGetSongsFromPlaylistApiV1PlaylistIdSongsGetRequest, options?: ConfigurationOptions): Promise<Array<number>> {
        return this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(param.id,  options).toPromise();
    }

    /**
     * List All Albums
     * @param param the request object
     */
    public listAllAlbumsApiV1AlbumsGetWithHttpInfo(param: V1ApiListAllAlbumsApiV1AlbumsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlbumResponse>>> {
        return this.api.listAllAlbumsApiV1AlbumsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Albums
     * @param param the request object
     */
    public listAllAlbumsApiV1AlbumsGet(param: V1ApiListAllAlbumsApiV1AlbumsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<AlbumResponse>> {
        return this.api.listAllAlbumsApiV1AlbumsGet( options).toPromise();
    }

    /**
     * List All Artist
     * @param param the request object
     */
    public listAllArtistApiV1ArtistsGetWithHttpInfo(param: V1ApiListAllArtistApiV1ArtistsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ArtistResponse>>> {
        return this.api.listAllArtistApiV1ArtistsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Artist
     * @param param the request object
     */
    public listAllArtistApiV1ArtistsGet(param: V1ApiListAllArtistApiV1ArtistsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ArtistResponse>> {
        return this.api.listAllArtistApiV1ArtistsGet( options).toPromise();
    }

    /**
     * List All Genres
     * @param param the request object
     */
    public listAllGenresApiV1GenresGetWithHttpInfo(param: V1ApiListAllGenresApiV1GenresGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<GenreResponse>>> {
        return this.api.listAllGenresApiV1GenresGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Genres
     * @param param the request object
     */
    public listAllGenresApiV1GenresGet(param: V1ApiListAllGenresApiV1GenresGetRequest = {}, options?: ConfigurationOptions): Promise<Array<GenreResponse>> {
        return this.api.listAllGenresApiV1GenresGet( options).toPromise();
    }

    /**
     * List All Playlists
     * @param param the request object
     */
    public listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(param: V1ApiListAllPlaylistsApiV1PlaylistsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Playlists
     * @param param the request object
     */
    public listAllPlaylistsApiV1PlaylistsGet(param: V1ApiListAllPlaylistsApiV1PlaylistsGetRequest = {}, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.listAllPlaylistsApiV1PlaylistsGet( options).toPromise();
    }

    /**
     * List All Song
     * @param param the request object
     */
    public listAllSongApiV1SongsGetWithHttpInfo(param: V1ApiListAllSongApiV1SongsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<SongResponse>>> {
        return this.api.listAllSongApiV1SongsGetWithHttpInfo( options).toPromise();
    }

    /**
     * List All Song
     * @param param the request object
     */
    public listAllSongApiV1SongsGet(param: V1ApiListAllSongApiV1SongsGetRequest = {}, options?: ConfigurationOptions): Promise<Array<SongResponse>> {
        return this.api.listAllSongApiV1SongsGet( options).toPromise();
    }

    /**
     * Set Database
     * @param param the request object
     */
    public setDatabaseApiV1DbPatchWithHttpInfo(param: V1ApiSetDatabaseApiV1DbPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<boolean>> {
        return this.api.setDatabaseApiV1DbPatchWithHttpInfo(param.path,  options).toPromise();
    }

    /**
     * Set Database
     * @param param the request object
     */
    public setDatabaseApiV1DbPatch(param: V1ApiSetDatabaseApiV1DbPatchRequest, options?: ConfigurationOptions): Promise<boolean> {
        return this.api.setDatabaseApiV1DbPatch(param.path,  options).toPromise();
    }

    /**
     * Stream Song
     * @param param the request object
     */
    public streamSongApiV1SongIdStreamGetWithHttpInfo(param: V1ApiStreamSongApiV1SongIdStreamGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.streamSongApiV1SongIdStreamGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Stream Song
     * @param param the request object
     */
    public streamSongApiV1SongIdStreamGet(param: V1ApiStreamSongApiV1SongIdStreamGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.streamSongApiV1SongIdStreamGet(param.id,  options).toPromise();
    }

    /**
     * Update Album
     * @param param the request object
     */
    public updateAlbumApiV1AlbumIdPatchWithHttpInfo(param: V1ApiUpdateAlbumApiV1AlbumIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        return this.api.updateAlbumApiV1AlbumIdPatchWithHttpInfo(param.id, param.albumUpdateRequest,  options).toPromise();
    }

    /**
     * Update Album
     * @param param the request object
     */
    public updateAlbumApiV1AlbumIdPatch(param: V1ApiUpdateAlbumApiV1AlbumIdPatchRequest, options?: ConfigurationOptions): Promise<AlbumResponse> {
        return this.api.updateAlbumApiV1AlbumIdPatch(param.id, param.albumUpdateRequest,  options).toPromise();
    }

    /**
     * Update Artist
     * @param param the request object
     */
    public updateArtistApiV1ArtistIdPatchWithHttpInfo(param: V1ApiUpdateArtistApiV1ArtistIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        return this.api.updateArtistApiV1ArtistIdPatchWithHttpInfo(param.id, param.artistUpdateRequest,  options).toPromise();
    }

    /**
     * Update Artist
     * @param param the request object
     */
    public updateArtistApiV1ArtistIdPatch(param: V1ApiUpdateArtistApiV1ArtistIdPatchRequest, options?: ConfigurationOptions): Promise<ArtistResponse> {
        return this.api.updateArtistApiV1ArtistIdPatch(param.id, param.artistUpdateRequest,  options).toPromise();
    }

    /**
     * Update Genre
     * @param param the request object
     */
    public updateGenreApiV1GenreIdPatchWithHttpInfo(param: V1ApiUpdateGenreApiV1GenreIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<GenreResponse>> {
        return this.api.updateGenreApiV1GenreIdPatchWithHttpInfo(param.id, param.genreUpdateRequest,  options).toPromise();
    }

    /**
     * Update Genre
     * @param param the request object
     */
    public updateGenreApiV1GenreIdPatch(param: V1ApiUpdateGenreApiV1GenreIdPatchRequest, options?: ConfigurationOptions): Promise<GenreResponse> {
        return this.api.updateGenreApiV1GenreIdPatch(param.id, param.genreUpdateRequest,  options).toPromise();
    }

    /**
     * Update Playlist
     * @param param the request object
     */
    public updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(param: V1ApiUpdatePlaylistApiV1PlaylistIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        return this.api.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(param.id, param.playlistUpdateRequest,  options).toPromise();
    }

    /**
     * Update Playlist
     * @param param the request object
     */
    public updatePlaylistApiV1PlaylistIdPatch(param: V1ApiUpdatePlaylistApiV1PlaylistIdPatchRequest, options?: ConfigurationOptions): Promise<PlaylistResponse> {
        return this.api.updatePlaylistApiV1PlaylistIdPatch(param.id, param.playlistUpdateRequest,  options).toPromise();
    }

    /**
     * Update Song
     * @param param the request object
     */
    public updateSongApiV1SongIdPatchWithHttpInfo(param: V1ApiUpdateSongApiV1SongIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        return this.api.updateSongApiV1SongIdPatchWithHttpInfo(param.id, param.songUpdateRequest,  options).toPromise();
    }

    /**
     * Update Song
     * @param param the request object
     */
    public updateSongApiV1SongIdPatch(param: V1ApiUpdateSongApiV1SongIdPatchRequest, options?: ConfigurationOptions): Promise<SongResponse> {
        return this.api.updateSongApiV1SongIdPatch(param.id, param.songUpdateRequest,  options).toPromise();
    }

    /**
     * Upload Song
     * @param param the request object
     */
    public uploadSongApiV1SongPostWithHttpInfo(param: V1ApiUploadSongApiV1SongPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        return this.api.uploadSongApiV1SongPostWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Upload Song
     * @param param the request object
     */
    public uploadSongApiV1SongPost(param: V1ApiUploadSongApiV1SongPostRequest, options?: ConfigurationOptions): Promise<SongResponse> {
        return this.api.uploadSongApiV1SongPost(param.file,  options).toPromise();
    }

}
