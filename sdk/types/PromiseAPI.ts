import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AlbumCreateRequest } from '../models/AlbumCreateRequest';
import { AlbumResponse } from '../models/AlbumResponse';
import { AlbumUpdateRequest } from '../models/AlbumUpdateRequest';
import { ArtistCreateRequest } from '../models/ArtistCreateRequest';
import { ArtistResponse } from '../models/ArtistResponse';
import { ArtistUpdateRequest } from '../models/ArtistUpdateRequest';
import { DeletedResponse } from '../models/DeletedResponse';
import { GenreCreateRequest } from '../models/GenreCreateRequest';
import { GenreUpdateRequest } from '../models/GenreUpdateRequest';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LocationInner } from '../models/LocationInner';
import { PlaylistCreateRequest } from '../models/PlaylistCreateRequest';
import { PlaylistResponse } from '../models/PlaylistResponse';
import { PlaylistUpdateRequest } from '../models/PlaylistUpdateRequest';
import { SongResponse } from '../models/SongResponse';
import { SongUpdateRequest } from '../models/SongUpdateRequest';
import { ValidationError } from '../models/ValidationError';
import { ObservableAlbumApi } from './ObservableAPI';

import { AlbumApiRequestFactory, AlbumApiResponseProcessor} from "../apis/AlbumApi";
export class PromiseAlbumApi {
    private api: ObservableAlbumApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlbumApiRequestFactory,
        responseProcessor?: AlbumApiResponseProcessor
    ) {
        this.api = new ObservableAlbumApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest: AlbumCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPost(albumCreateRequest: AlbumCreateRequest, _options?: PromiseConfigurationOptions): Promise<AlbumResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlbumApiV1AlbumPost(albumCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAlbumApiV1AlbumIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumApiV1AlbumIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<AlbumResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumApiV1AlbumIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromAlbumApiV1AlbumIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromAlbumApiV1AlbumIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlbumResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAlbumsApiV1AlbumsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGet(_options?: PromiseConfigurationOptions): Promise<Array<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAlbumsApiV1AlbumsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatchWithHttpInfo(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlbumApiV1AlbumIdPatchWithHttpInfo(id, albumUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatch(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: PromiseConfigurationOptions): Promise<AlbumResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableArtistApi } from './ObservableAPI';

import { ArtistApiRequestFactory, ArtistApiResponseProcessor} from "../apis/ArtistApi";
export class PromiseArtistApi {
    private api: ObservableArtistApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtistApiRequestFactory,
        responseProcessor?: ArtistApiResponseProcessor
    ) {
        this.api = new ObservableArtistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest: ArtistCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPost(artistCreateRequest: ArtistCreateRequest, _options?: PromiseConfigurationOptions): Promise<ArtistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createArtistApiV1ArtistPost(artistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteArtistApiV1ArtistIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistApiV1ArtistIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<ArtistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistApiV1ArtistIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromSongApiV1SongIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromArtistApiV1ArtistIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromArtistApiV1ArtistIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ArtistResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllArtistApiV1ArtistsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGet(_options?: PromiseConfigurationOptions): Promise<Array<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllArtistApiV1ArtistsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatchWithHttpInfo(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateArtistApiV1ArtistIdPatchWithHttpInfo(id, artistUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatch(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<ArtistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDatabaseApi } from './ObservableAPI';

import { DatabaseApiRequestFactory, DatabaseApiResponseProcessor} from "../apis/DatabaseApi";
export class PromiseDatabaseApi {
    private api: ObservableDatabaseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseApiRequestFactory,
        responseProcessor?: DatabaseApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatchWithHttpInfo(path: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setDatabaseApiV1DbPatchWithHttpInfo(path, observableOptions);
        return result.toPromise();
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatch(path: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setDatabaseApiV1DbPatch(path, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Albums
     */
    public albumsUiAlbumsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.albumsUiAlbumsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Albums
     */
    public albumsUiAlbumsGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.albumsUiAlbumsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Artists
     */
    public artistsUiArtistsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.artistsUiArtistsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Artists
     */
    public artistsUiArtistsGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.artistsUiArtistsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Playlists
     */
    public playlistsUiPlaylistsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.playlistsUiPlaylistsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Playlists
     */
    public playlistsUiPlaylistsGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.playlistsUiPlaylistsGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableGenreApi } from './ObservableAPI';

import { GenreApiRequestFactory, GenreApiResponseProcessor} from "../apis/GenreApi";
export class PromiseGenreApi {
    private api: ObservableGenreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GenreApiRequestFactory,
        responseProcessor?: GenreApiResponseProcessor
    ) {
        this.api = new ObservableGenreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest: GenreCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePost(genreCreateRequest: GenreCreateRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGenreApiV1GenrePost(genreCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Genre
     * @param name
     */
    public deleteGenreApiV1GenreDeleteWithHttpInfo(name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGenreApiV1GenreDeleteWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Genre
     * @param name
     */
    public deleteGenreApiV1GenreDelete(name: string, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGenreApiV1GenreDelete(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromAlbumApiV1AlbumIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromArtistApiV1ArtistIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Genre
     * @param name
     */
    public getSongsFromGenreApiV1GenreSongsGetWithHttpInfo(name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromGenreApiV1GenreSongsGetWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Genre
     * @param name
     */
    public getSongsFromGenreApiV1GenreSongsGet(name: string, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromGenreApiV1GenreSongsGet(name, observableOptions);
        return result.toPromise();
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllGenresApiV1GenresGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGet(_options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllGenresApiV1GenresGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Update Genre
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenrePatchWithHttpInfo(genreUpdateRequest: GenreUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGenreApiV1GenrePatchWithHttpInfo(genreUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Genre
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenrePatch(genreUpdateRequest: GenreUpdateRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGenreApiV1GenrePatch(genreUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableImageApi } from './ObservableAPI';

import { ImageApiRequestFactory, ImageApiResponseProcessor} from "../apis/ImageApi";
export class PromiseImageApi {
    private api: ObservableImageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImageApiRequestFactory,
        responseProcessor?: ImageApiResponseProcessor
    ) {
        this.api = new ObservableImageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePostWithHttpInfo(file: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addImageApiV1ImagePostWithHttpInfo(file, observableOptions);
        return result.toPromise();
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePost(file: string, _options?: PromiseConfigurationOptions): Promise<number> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addImageApiV1ImagePost(file, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageApiV1ImageIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageApiV1ImageIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getImageApiV1ImageIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getImageApiV1ImageIdGet(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePlaylistApi } from './ObservableAPI';

import { PlaylistApiRequestFactory, PlaylistApiResponseProcessor} from "../apis/PlaylistApi";
export class PromisePlaylistApi {
    private api: ObservablePlaylistApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlaylistApiRequestFactory,
        responseProcessor?: PlaylistApiResponseProcessor
    ) {
        this.api = new ObservablePlaylistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest: PlaylistCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPost(playlistCreateRequest: PlaylistCreateRequest, _options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPlaylistApiV1PlaylistPost(playlistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlaylistApiV1PlaylistIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistApiV1PlaylistIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistApiV1PlaylistIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGet(_options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllPlaylistsApiV1PlaylistsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id, playlistUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatch(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSongApi } from './ObservableAPI';

import { SongApiRequestFactory, SongApiResponseProcessor} from "../apis/SongApi";
export class PromiseSongApi {
    private api: ObservableSongApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SongApiRequestFactory,
        responseProcessor?: SongApiResponseProcessor
    ) {
        this.api = new ObservableSongApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSongApiV1SongIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSongApiV1SongIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromSongApiV1SongIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongApiV1SongIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<SongResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongApiV1SongIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromAlbumApiV1AlbumIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromArtistApiV1ArtistIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Genre
     * @param name
     */
    public getSongsFromGenreApiV1GenreSongsGetWithHttpInfo(name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromGenreApiV1GenreSongsGetWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Genre
     * @param name
     */
    public getSongsFromGenreApiV1GenreSongsGet(name: string, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromGenreApiV1GenreSongsGet(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SongResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllSongApiV1SongsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGet(_options?: PromiseConfigurationOptions): Promise<Array<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllSongApiV1SongsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamSongApiV1SongIdStreamGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGet(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamSongApiV1SongIdStreamGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatchWithHttpInfo(id: number, songUpdateRequest: SongUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSongApiV1SongIdPatchWithHttpInfo(id, songUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatch(id: number, songUpdateRequest: SongUpdateRequest, _options?: PromiseConfigurationOptions): Promise<SongResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSongApiV1SongIdPatch(id, songUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPostWithHttpInfo(file: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSongApiV1SongPostWithHttpInfo(file, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPost(file: string, _options?: PromiseConfigurationOptions): Promise<SongResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSongApiV1SongPost(file, observableOptions);
        return result.toPromise();
    }


}



import { ObservableV1Api } from './ObservableAPI';

import { V1ApiRequestFactory, V1ApiResponseProcessor} from "../apis/V1Api";
export class PromiseV1Api {
    private api: ObservableV1Api

    public constructor(
        configuration: Configuration,
        requestFactory?: V1ApiRequestFactory,
        responseProcessor?: V1ApiResponseProcessor
    ) {
        this.api = new ObservableV1Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePostWithHttpInfo(file: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addImageApiV1ImagePostWithHttpInfo(file, observableOptions);
        return result.toPromise();
    }

    /**
     * Add Image
     * @param file
     */
    public addImageApiV1ImagePost(file: string, _options?: PromiseConfigurationOptions): Promise<number> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addImageApiV1ImagePost(file, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest: AlbumCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlbumApiV1AlbumPostWithHttpInfo(albumCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Album
     * @param albumCreateRequest
     */
    public createAlbumApiV1AlbumPost(albumCreateRequest: AlbumCreateRequest, _options?: PromiseConfigurationOptions): Promise<AlbumResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAlbumApiV1AlbumPost(albumCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest: ArtistCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createArtistApiV1ArtistPostWithHttpInfo(artistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Artist
     * @param artistCreateRequest
     */
    public createArtistApiV1ArtistPost(artistCreateRequest: ArtistCreateRequest, _options?: PromiseConfigurationOptions): Promise<ArtistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createArtistApiV1ArtistPost(artistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest: GenreCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGenreApiV1GenrePostWithHttpInfo(genreCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Genre
     * @param genreCreateRequest
     */
    public createGenreApiV1GenrePost(genreCreateRequest: GenreCreateRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGenreApiV1GenrePost(genreCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest: PlaylistCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPlaylistApiV1PlaylistPostWithHttpInfo(playlistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create Playlist
     * @param playlistCreateRequest
     */
    public createPlaylistApiV1PlaylistPost(playlistCreateRequest: PlaylistCreateRequest, _options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPlaylistApiV1PlaylistPost(playlistCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAlbumApiV1AlbumIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Album
     * @param id
     */
    public deleteAlbumApiV1AlbumIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAlbumApiV1AlbumIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteArtistApiV1ArtistIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Artist
     * @param id
     */
    public deleteArtistApiV1ArtistIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteArtistApiV1ArtistIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Genre
     * @param name
     */
    public deleteGenreApiV1GenreDeleteWithHttpInfo(name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGenreApiV1GenreDeleteWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Genre
     * @param name
     */
    public deleteGenreApiV1GenreDelete(name: string, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGenreApiV1GenreDelete(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageApiV1ImageIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Image
     * @param id
     */
    public deleteImageApiV1ImageIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageApiV1ImageIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlaylistApiV1PlaylistIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Playlist
     * @param id
     */
    public deletePlaylistApiV1PlaylistIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePlaylistApiV1PlaylistIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSongApiV1SongIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Song
     * @param id
     */
    public deleteSongApiV1SongIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<DeletedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSongApiV1SongIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumApiV1AlbumIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Album
     * @param id
     */
    public getAlbumApiV1AlbumIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<AlbumResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumApiV1AlbumIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Albums From Playlist
     * @param id
     */
    public getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlbumsFromPlaylistApiV1PlaylistIdAlbumsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistApiV1ArtistIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artist
     * @param id
     */
    public getArtistApiV1ArtistIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<ArtistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistApiV1ArtistIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Artists From Playlist
     * @param id
     */
    public getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getArtistsFromPlaylistApiV1PlaylistIdArtistsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Collaborations From Artist
     * @param id
     */
    public getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCollaborationsFromArtistApiV1ArtistIdCollaborationsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Album
     * @param id
     */
    public getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromAlbumApiV1AlbumIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Artist
     * @param id
     */
    public getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromArtistApiV1ArtistIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromSongApiV1SongIdFeaturesGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Features From Song
     * @param id
     */
    public getFeaturesFromSongApiV1SongIdFeaturesGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFeaturesFromSongApiV1SongIdFeaturesGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromAlbumApiV1AlbumIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Album
     * @param id
     */
    public getGenresFromAlbumApiV1AlbumIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromAlbumApiV1AlbumIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromArtistApiV1ArtistIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Artist
     * @param id
     */
    public getGenresFromArtistApiV1ArtistIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromArtistApiV1ArtistIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Genres From Playlist
     * @param id
     */
    public getGenresFromPlaylistApiV1PlaylistIdGenresGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getGenresFromPlaylistApiV1PlaylistIdGenresGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getImageApiV1ImageIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Image
     * @param id
     */
    public getImageApiV1ImageIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getImageApiV1ImageIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistApiV1PlaylistIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlist
     * @param id
     */
    public getPlaylistApiV1PlaylistIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistApiV1PlaylistIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Playlists Song Is Part Of
     * @param id
     */
    public getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPlaylistsSongIsPartOfApiV1SongIdPlaylistsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongApiV1SongIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Song
     * @param id
     */
    public getSongApiV1SongIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<SongResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongApiV1SongIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromAlbumApiV1AlbumIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Album
     * @param id
     */
    public getSongsFromAlbumApiV1AlbumIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromAlbumApiV1AlbumIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromArtistApiV1ArtistIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Artist
     * @param id
     */
    public getSongsFromArtistApiV1ArtistIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromArtistApiV1ArtistIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Genre
     * @param name
     */
    public getSongsFromGenreApiV1GenreSongsGetWithHttpInfo(name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromGenreApiV1GenreSongsGetWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Genre
     * @param name
     */
    public getSongsFromGenreApiV1GenreSongsGet(name: string, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromGenreApiV1GenreSongsGet(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<number>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Songs From Playlist
     * @param id
     */
    public getSongsFromPlaylistApiV1PlaylistIdSongsGet(id: number, _options?: PromiseConfigurationOptions): Promise<Array<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSongsFromPlaylistApiV1PlaylistIdSongsGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlbumResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAlbumsApiV1AlbumsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Albums
     */
    public listAllAlbumsApiV1AlbumsGet(_options?: PromiseConfigurationOptions): Promise<Array<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAlbumsApiV1AlbumsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ArtistResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllArtistApiV1ArtistsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Artist
     */
    public listAllArtistApiV1ArtistsGet(_options?: PromiseConfigurationOptions): Promise<Array<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllArtistApiV1ArtistsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllGenresApiV1GenresGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Genres
     */
    public listAllGenresApiV1GenresGet(_options?: PromiseConfigurationOptions): Promise<Array<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllGenresApiV1GenresGet(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllPlaylistsApiV1PlaylistsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Playlists
     */
    public listAllPlaylistsApiV1PlaylistsGet(_options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllPlaylistsApiV1PlaylistsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SongResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllSongApiV1SongsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * List All Song
     */
    public listAllSongApiV1SongsGet(_options?: PromiseConfigurationOptions): Promise<Array<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllSongApiV1SongsGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatchWithHttpInfo(path: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setDatabaseApiV1DbPatchWithHttpInfo(path, observableOptions);
        return result.toPromise();
    }

    /**
     * Set Database
     * @param path
     */
    public setDatabaseApiV1DbPatch(path: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setDatabaseApiV1DbPatch(path, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamSongApiV1SongIdStreamGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Stream Song
     * @param id
     */
    public streamSongApiV1SongIdStreamGet(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamSongApiV1SongIdStreamGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatchWithHttpInfo(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AlbumResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlbumApiV1AlbumIdPatchWithHttpInfo(id, albumUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Album
     * @param id
     * @param albumUpdateRequest
     */
    public updateAlbumApiV1AlbumIdPatch(id: number, albumUpdateRequest: AlbumUpdateRequest, _options?: PromiseConfigurationOptions): Promise<AlbumResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAlbumApiV1AlbumIdPatch(id, albumUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatchWithHttpInfo(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArtistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateArtistApiV1ArtistIdPatchWithHttpInfo(id, artistUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Artist
     * @param id
     * @param artistUpdateRequest
     */
    public updateArtistApiV1ArtistIdPatch(id: number, artistUpdateRequest: ArtistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<ArtistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateArtistApiV1ArtistIdPatch(id, artistUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Genre
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenrePatchWithHttpInfo(genreUpdateRequest: GenreUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGenreApiV1GenrePatchWithHttpInfo(genreUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Genre
     * @param genreUpdateRequest
     */
    public updateGenreApiV1GenrePatch(genreUpdateRequest: GenreUpdateRequest, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGenreApiV1GenrePatch(genreUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PlaylistResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePlaylistApiV1PlaylistIdPatchWithHttpInfo(id, playlistUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Playlist
     * @param id
     * @param playlistUpdateRequest
     */
    public updatePlaylistApiV1PlaylistIdPatch(id: number, playlistUpdateRequest: PlaylistUpdateRequest, _options?: PromiseConfigurationOptions): Promise<PlaylistResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePlaylistApiV1PlaylistIdPatch(id, playlistUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatchWithHttpInfo(id: number, songUpdateRequest: SongUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSongApiV1SongIdPatchWithHttpInfo(id, songUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Song
     * @param id
     * @param songUpdateRequest
     */
    public updateSongApiV1SongIdPatch(id: number, songUpdateRequest: SongUpdateRequest, _options?: PromiseConfigurationOptions): Promise<SongResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSongApiV1SongIdPatch(id, songUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPostWithHttpInfo(file: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SongResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSongApiV1SongPostWithHttpInfo(file, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload Song
     * @param file
     */
    public uploadSongApiV1SongPost(file: string, _options?: PromiseConfigurationOptions): Promise<SongResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSongApiV1SongPost(file, observableOptions);
        return result.toPromise();
    }


}



