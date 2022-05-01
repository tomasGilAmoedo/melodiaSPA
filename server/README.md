### Module 1 => Getting started with REST API's and Express
> Basically understand the principles of REST which will serve us to understand the connection to the Spotifty API.
API => Permite la comunicación entre Softwares.

## RESTFull Request: Compuestos por 4 elementos_
1) The endPoint URL
2) The HTTP Method [GET,POST,PUT,PATCH,DELETE]
3) The HTTP Header => `Authentication Header, Cachinh Header, etc...`
4) The body data

### Spotifty API Authentication 
1) Spotify Dashboard 
2) OAuth Authentication
3) Spotify flow 
4) Spotify Auth with express

client ID: 85683371d56f477e9723bcdf45c14693

Spotify API => Te dan un client ID y un Cient secret.
=> First of all => to receive a Token we need to send the [clientID] & the [clientSecret] in a HTTP Request. 

Undersatangin [OAUTH]: Open Authorization.
Auth que te permite conectar de manera óptima sin la necesidad de exponer tu password. => `Standar Way of Auth`
Te permite pasar data through Apps a traves de [accessTokens] => Actuan como [Bridges] entre Aplicaciones que requieren tu Password 
[IMP] => Se trata de [Authorization]=> Asking for permission to do things // NO DE => [Authentication] => Providing username & password.

Para que el OAuth se complete hay client4 partes que deben acordar:
1) Server resources => Spotify en este caso
2) Resources Owner => El usuario
3) Client => `App que quiere acceder a la data`
4) [AuthorizationServer] => Server que recibe la Req de acceso a la data => En este caso es el server de Spotify.


[Tokens] => 
1) Va incluido en los HEADERS del hhtp req que le mandas al spotify server.
2) Los Tokens tienen un tiempo de expiración. => At the end => o sacas uno nuevo o refresh the same Token

The OAuth Flow:
-Client ID
-Client secret


