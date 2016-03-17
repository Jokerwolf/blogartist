/**
 * User: EGordina
 * Date: 09.12.15
 * Time: 13:40
 */
angular.module('blogArtist.shared', []);

angular.module('blogArtist.blog', ['ngResource', 'ngSanitize', 'blogArtist.shared'])
    .constant('serverURL', 'http://localhost:8081');

angular.module('blogArtist.login', []);
angular.module('blogArtist.admin', []);


angular.module('blogArtist', ['blogArtist.blog', 'blogArtist.admin', 'blogArtist.login']);
