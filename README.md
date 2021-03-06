Divshot CLI
===========

CLI for Divshot

#### [Commands](https://github.com/divshot/divshot-cli/blob/master/README.md#commands-1)

* [apps](https://github.com/divshot/divshot-cli/blob/master/README.md#apps) - list your apps
* [auth:token](https://github.com/divshot/divshot-cli/blob/master/README.md#authtoken) - print out your access token
* [config](https://github.com/divshot/divshot-cli/blob/master/README.md#config) - list, set, or remove keys and values from your app
* [config:add](https://github.com/divshot/divshot-cli/blob/master/README.md#configadd) - add a value to the config file
* [config:remove](https://github.com/divshot/divshot-cli/blob/master/README.md#configremove) - remove a value from the config file
* [create](https://github.com/divshot/divshot-cli/blob/master/README.md#create) - create a new app
* [destroy](https://github.com/divshot/divshot-cli/blob/master/README.md#destroy) - delete a divshot.io app
* [domains](https://github.com/divshot/divshot-cli/blob/master/README.md#domains) - list your domains
* [domains:add](https://github.com/divshot/divshot-cli/blob/master/README.md#domainsadd) - add a custom domain to your app
* [domains:remove](https://github.com/divshot/divshot-cli/blob/master/README.md#domainsremove) - remove a custom domain from your app
* [help](https://github.com/divshot/divshot-cli/blob/master/README.md#help) - get help with common Divshot.io commands
* [init](https://github.com/divshot/divshot-cli/blob/master/README.md#init) - step by step guide to initiate an app in the current directory
* [login](https://github.com/divshot/divshot-cli/blob/master/README.md#login) - login to Divshot.io
* [logout](https://github.com/divshot/divshot-cli/blob/master/README.md#logout) - logout from Divshot.io
* [promote](https://github.com/divshot/divshot-cli/blob/master/README.md#promote) - promote one environment to another
* [push](https://github.com/divshot/divshot-cli/blob/master/README.md#push) - deploy your app to the specified environment
* [rename](https://github.com/divshot/divshot-cli/blob/master/README.md#rename) - change the name of an app
* [rollback](https://github.com/divshot/divshot-cli/blob/master/README.md#rollback) - rollback an environment to a previous release
* [server](https://github.com/divshot/divshot-cli/blob/master/README.md#server) - start server for local dev
* [status](https://github.com/divshot/divshot-cli/blob/master/README.md#status) - show release info for each environment
* [-v]() - show current version of Divshot Cli
 
#### Command Options

* ` --token [token] ` - manually pass access token
* ` --app [app name] ` - manually supply the Divshot.io app name
* ` --no-color ` - strip all use of color in output

####Environments

* ` development `
* ` staging `
* ` production ` - this is the default environment during app deployment

Each environment is immediately available and deployent at the following url scheme: **http://[environment].[app name].divshot.io**. You may reference [Divshot.io Builds and Environments](http://docs.divshot.io/guides/builds) for a more detailed explanation.


## Install

```
npm install divshot-cli -g
```

## Commands

### apps

```
divshot apps
```

List your Divshot.io apps.

### auth:token

```
divshot auth:token
```

Print out your access token. This token is used to authenticate you with the Divshot api.

### config

```
divshot config
```

List the keys and values from your Divshot.io app config file. See [Divshot.io configuration reference](http://docs.divshot.io/guides/configuration) for more details on these values.

### config:add

```
divshot config:add [key] [value]
```

Add a value to your Divshot.io app config file. See [Divshot.io configuration reference](http://docs.divshot.io/guides/configuration) for more details on these values.

### config:remove

```
divshot config:remove [key]
```

Remove a value from your Divshot.io app config file. See [Divshot.io configuration reference](http://docs.divshot.io/guides/configuration) for more details on these values.

### create

```
divshot create [app name]
```

Create a new Divshot.io app. If no app nam eis provided, it attempts to read from your Divshot.io configuration file. It that does not exist, it will prompt you for an app name. You can easily create a new Divshot.io app locally and remotely by using [` divshot init `](https://github.com/divshot/divshot-cli/blob/master/README.md#init).

### destroy


```
dishot destroy [app name]
```

Delete a Divshot.io app. This is permanent and immediate. It removes not only your files, but it disables the subdomain associated with the application.

### domains

```
divshot domains
```

See a list of all custom domains associated with your app. For more in depth usage, see [Divshot.io Custom Domains](http://docs.divshot.io/guides/domains)

### domains:add

```
divshot domains:add [domain]
```

Add a custom domain to your app. You may see a list of your domains with [` divshot domains `](https://github.com/divshot/divshot-cli/blob/master/README.md#domains). For more in depth usage, see [Divshot.io Custom Domains](http://docs.divshot.io/guides/domains)

### domains:remove

```
divshot domains:remove [domain]
```

Remove a custom domain from your app. You may see a list of your domains with [` divshot domains `](https://github.com/divshot/divshot-cli/blob/master/README.md#domains). For more in depth usage, see [Divshot.io Custom Domains](http://docs.divshot.io/guides/domains)

### help

```
divshot help
```

Get help with common Divshot.io commands. Lists all the available commands.

If you need help with a specific command, you may specify that command after the word *help*.

```
divshot help [command]
```

### init

```
divhshot init
```

Step by step guide to initiate an app in the current directory. The steps you are taken through are as follows:

1. ` name ` - app name
2. ` root ` - the root directory of the app relative to the current directory
3. ` error page ` - the relative path or absolute url of an error/not foud page to display in in your app.
4. ` create app ` - do you want to create  new app on Divshot.io upon completing these steps? (As opposed to only creating the app locally)

Once your initiated your app, the *root* directory will now contain a ` divshot.json ` file with your settings. You may reference [Divshot.io configuration reference](http://docs.divshot.io/guides/configuration) for a more detailed description of this file.

### login

```
divshot login
```

Login to your Divshot.io account.

### logout

```
divshot logout
```

Logout of your account.

### promote

```
divshot promote [from env] [to env]
```

Promote one environment to another. A typical use case for this command would be to deploy your staging app to production without having to reploy all the files. See [environments](https://github.com/divshot/divshot-cli/blob/master/README.md#environments) for a list of available environments.

Example promotions

* ` divshot promote development staging ` - development -> staging
* ` divshot promote staging production ` - staging -> production

### push

```
divshot push [environment]
```

Deploy your app to the specified environment. If no environment is given, we assume that you mean *production*. The entire push process takes as long as the number of files in your project. Once deployed, your app is immediately available. See [environments](https://github.com/divshot/divshot-cli/blob/master/README.md#environments) for a list of available environments.

### rename

```
divshot rename [new app name]
```

Rename your app. This changes the subomdain on Divshot.io and updates your configuration file. It is permanent once complete.

### rollback

```
divshot rollback [environment]
```

Rollback the given environment to a previous release. This is useful when buggy code has been deployed. Divshot.io automatically detects what your previously release was and rollsback to that release. See [environments](https://github.com/divshot/divshot-cli/blob/master/README.md#environments) for a list of available environments.

### server

```
divshot server
```

Start a server for local development. This local server mimics the capabilities of static sites running on [Divshot.io](http://divshot.io). Refer to the [Divshot.io documentation](http://docs.divshot.io/guides/configuration) for configuration instructions.

Server command options:

* ` -p, --port [port]` - specify the port for the server to run. Defaults to *3474*
* ` -h, --host [hostname]` - specify a custom hostname for your app to run at. Defaults to *localhost*

### status

```
divshot status [environment]
```

Show release info for each environment. If you no environment is specified, the latest release info will be listed for each enviornment. If an environment is specifed, it will list the last few releases for that environment. See [environments](https://github.com/divshot/divshot-cli/blob/master/README.md#environments) for a list of available environments.

