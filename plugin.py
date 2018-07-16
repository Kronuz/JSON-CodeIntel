import sublime

import os
import shutil

from SublimeCodeIntel.plugin.core.settings import ClientConfig
from SublimeCodeIntel.plugin.core.handlers import LanguageHandler
from SublimeCodeIntel.plugin.core.spinner import spinner

package_path = os.path.dirname(__file__)
server_path = os.path.join(package_path, 'server')


def node_command():
    return "node"


def node_is_installed():
    return shutil.which(node_command()) is not None


class CodeIntelJsonClientConfig(ClientConfig):
    def __init__(self):
        self.name = "json"
        self.binary_args = [
            node_command(),
            os.path.join(server_path, "vscode-json-languageserver.js"),
            "--stdio"
        ]
        self.tcp_port = None
        self.languages = {
            "json": {
                "scopes": ["source.json"],
                "syntaxes": ["json"],
            },
            "jsonc": {
                "scopes": ["source.json.sublime"],
                "syntaxes": ["sublime text"],
            },
        }
        self.enabled = True
        self.init_options = {}
        self.settings = {
            # From http://schemastore.org/api/json/catalog.json
            "json": {
                "schemas": [
                    {
                        "name": ".angular-cli.json",
                        "description": "Angular CLI configuration file",
                        "fileMatch": [".angular-cli.json", "angular-cli.json"],
                        "url": "https://raw.githubusercontent.com/angular/angular-cli/master/packages/angular/cli/lib/config/schema.json"
                    },
                    {
                        "name": "Ansible",
                        "description": "Ansible task files",
                        "url": "http://json.schemastore.org/ansible-stable-2.5",
                        "fileMatch": ["tasks/*.yml", "tasks/*.yaml"],
                        "versions": {
                            "2.0": "http://json.schemastore.org/ansible-stable-2.0",
                            "2.1": "http://json.schemastore.org/ansible-stable-2.1",
                            "2.2": "http://json.schemastore.org/ansible-stable-2.2",
                            "2.3": "http://json.schemastore.org/ansible-stable-2.3",
                            "2.4": "http://json.schemastore.org/ansible-stable-2.4",
                            "2.5": "http://json.schemastore.org/ansible-stable-2.5"
                        }
                    },
                    {
                        "name": "apple-app-site-association",
                        "description": "Apple Universal Link, App Site Association",
                        "fileMatch": ["apple-app-site-association"],
                        "url": "http://json.schemastore.org/apple-app-site-association"
                    },
                    {
                        "name": "appsettings.json",
                        "description": "ASP.NET Core's configuration file",
                        "fileMatch": ["appsettings.json", "appsettings.*.json"],
                        "url": "http://json.schemastore.org/appsettings"
                    },
                    {
                        "name": "appveyor.yml",
                        "description": "AppVeyor CI configuration file",
                        "fileMatch": ["appveyor.yml"],
                        "url": "http://json.schemastore.org/appveyor"
                    },
                    {
                        "name": "Avro Avsc",
                        "description": "Avro Schema Avsc file",
                        "fileMatch": [".avsc"],
                        "url": "http://json.schemastore.org/avro-avsc"
                    },
                    {
                        "name": "Foxx Manifest",
                        "description": "ArangoDB Foxx service manifest file",
                        "fileMatch": ["manifest.json"],
                        "url": "http://json.schemastore.org/foxx-manifest"
                    },
                    {
                        "name": ".asmdef",
                        "description": "Unity 3D assembly definition file",
                        "fileMatch": ["*.asmdef"],
                        "url": "http://json.schemastore.org/asmdef"
                    },
                    {
                        "name": "babelrc.json",
                        "description": "Babel configuration file",
                        "fileMatch": [".babelrc"],
                        "url": "http://json.schemastore.org/babelrc"
                    },
                    {
                        "name": "batect.yml",
                        "description": "batect configuration file",
                        "fileMatch": ["batect.yml"],
                        "url": "https://batect.charleskorn.com/configSchema.json"
                    },
                    {
                        "name": ".bootstraprc",
                        "description": "Webpack bootstrap-loader configuration file",
                        "fileMatch": [".bootstraprc"],
                        "url": "http://json.schemastore.org/bootstraprc"
                    },
                    {
                        "name": "bower.json",
                        "description": "Bower package description file",
                        "fileMatch": ["bower.json", ".bower.json"],
                        "url": "http://json.schemastore.org/bower"
                    },
                    {
                        "name": ".bowerrc",
                        "description": "Bower configuration file",
                        "fileMatch": [".bowerrc"],
                        "url": "http://json.schemastore.org/bowerrc"
                    },
                    {
                        "name": "bundleconfig.json",
                        "description": "Schema for bundleconfig.json files",
                        "fileMatch": ["bundleconfig.json"],
                        "url": "http://json.schemastore.org/bundleconfig"
                    },
                    {
                        "name": "circleciconfig.json",
                        "description": "Schema for CircleCI 2.0 config files",
                        "fileMatch": [".circleci/config.yml"],
                        "url": "http://json.schemastore.org/circleciconfig"
                    },
                    {
                        "name": "compilerconfig.json",
                        "description": "Schema for compilerconfig.json files",
                        "fileMatch": ["compilerconfig.json"],
                        "url": "http://json.schemastore.org/compilerconfig"
                    },
                    {
                        "name": "commands.json",
                        "description": "Config file for Command Task Runner",
                        "fileMatch": ["commands.json"],
                        "url": "http://json.schemastore.org/commands"
                    },
                    {
                        "name": "Chrome Extension",
                        "description": "Google Chrome extension manifest file",
                        "url": "http://json.schemastore.org/chrome-manifest"
                    },
                    {
                        "name": "chutzpah.json",
                        "description": "Chutzpah configuration file",
                        "fileMatch": ["chutzpah.json"],
                        "url": "http://json.schemastore.org/chutzpah"
                    },
                    {
                        "name": "contentmanifest.json",
                        "description": "Visual Studio manifest injection file",
                        "fileMatch": ["contentmanifest.json"],
                        "url": "http://json.schemastore.org/vsix-manifestinjection"
                    },
                    {
                        "name": "AWS CloudFormation",
                        "description": "AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment.",
                        "fileMatch": ["*.cf.json", "*.cf.yml", "*.cf.yaml", "cloudformation.json", "cloudformation.yml", "cloudformation.yaml"],
                        "url": "https://raw.githubusercontent.com/awslabs/goformation/master/schema/cloudformation.schema.json"
                    },
                    {
                        "name": "AWS CloudFormation Serverless Application Model (SAM)",
                        "description": "The AWS Serverless Application Model (AWS SAM, previously known as Project Flourish) extends AWS CloudFormation to provide a simplified way of defining the Amazon API Gateway APIs, AWS Lambda functions, and Amazon DynamoDB tables needed by your serverless application.",
                        "fileMatch": ["*.sam.json", "*.sam.yml", "*.sam.yaml", "sam.json", "sam.yml", "sam.yaml"],
                        "url": "https://raw.githubusercontent.com/awslabs/goformation/master/schema/sam.schema.json"
                    },
                    {
                        "name": "coffeelint.json",
                        "description": "CoffeeLint configuration file",
                        "fileMatch": ["coffeelint.json"],
                        "url": "http://json.schemastore.org/coffeelint"
                    },
                    {
                        "name": "composer.json",
                        "description": "PHP Composer configuration file",
                        "fileMatch": ["composer.json"],
                        "url": "http://json.schemastore.org/composer"
                    },
                    {
                        "name": "component.json",
                        "description": "Web component file",
                        "fileMatch": ["component.json"],
                        "url": "http://json.schemastore.org/component"
                    },
                    {
                        "name": "config.json",
                        "description": "ASP.NET project config file",
                        "fileMatch": ["config.json"],
                        "url": "http://json.schemastore.org/config"
                    },
                    {
                        "name": "contribute.json",
                        "description": "A JSON schema for open-source project contribution data by Mozilla",
                        "fileMatch": ["contribute.json"],
                        "url": "http://json.schemastore.org/contribute"
                    },
                    {
                        "name": "cypress.json",
                        "description": "Cypress.io test runner configuration file",
                        "fileMatch": ["cypress.json"],
                        "url": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json"
                    },
                    {
                        "name": ".creatomic",
                        "description": "A config for Atomic Design 4 React generator",
                        "fileMatch": [".creatomic"],
                        "url": "http://json.schemastore.org/creatomic"
                    },
                    {
                        "name": ".csscomb.json",
                        "description": "A JSON schema CSS Comb's configuration file",
                        "fileMatch": [".csscomb.json"],
                        "url": "http://json.schemastore.org/csscomb"
                    },
                    {
                        "name": ".csslintrc",
                        "description": "A JSON schema CSS Lint's configuration file",
                        "fileMatch": [".csslintrc"],
                        "url": "http://json.schemastore.org/csslintrc"
                    },
                    {
                        "name": "debugsettings.json",
                        "description": "A JSON schema for the ASP.NET DebugSettings.json files",
                        "fileMatch": ["debugsettings.json"],
                        "url": "http://json.schemastore.org/debugsettings"
                    },
                    {
                        "name": "docfx.json",
                        "description": "A JSON schema for DocFx configuraton files",
                        "fileMatch": ["docfx.json"],
                        "url": "http://json.schemastore.org/docfx",
                        "versions": {
                            "2.8.0": "http://json.schemastore.org/docfx-2.8.0"
                        }
                    },
                    {
                        "name": "dotnetcli.host.json",
                        "description": "JSON schema for .NET CLI template host files",
                        "fileMatch": ["dotnetcli.host.json"],
                        "url": "http://json.schemastore.org/dotnetcli.host"
                    },
                    {
                        "name": "epr-manifest.json",
                        "description": "Entry Point Regulation manifest file",
                        "fileMatch": ["epr-manifest.json"],
                        "url": "http://json.schemastore.org/epr-manifest"
                    },
                    {
                        "name": ".eslintrc",
                        "description": "JSON schema for ESLint configuration files",
                        "fileMatch": [".eslintrc", ".eslintrc.json"],
                        "url": "http://json.schemastore.org/eslintrc"
                    },
                    {
                        "name": "function.json",
                        "description": "JSON schema for Azure Functions function.json files",
                        "fileMatch": ["function.json"],
                        "url": "http://json.schemastore.org/function"
                    },
                    {
                        "name": "geojson.json",
                        "description": "GeoJSON format for representing geographic data.",
                        "url": "http://json.schemastore.org/geojson"
                    },
                    {
                        "name": "global.json",
                        "description": "ASP.NET global configuration file",
                        "fileMatch": ["global.json"],
                        "url": "http://json.schemastore.org/global"
                    },
                    {
                        "name": "Grunt copy task",
                        "description": "Grunt copy task configuration file",
                        "fileMatch": ["copy.json"],
                        "url": "http://json.schemastore.org/grunt-copy-task"
                    },
                    {
                        "name": "Grunt clean task",
                        "description": "Grunt clean task configuration file",
                        "fileMatch": ["clean.json"],
                        "url": "http://json.schemastore.org/grunt-clean-task"
                    },
                    {
                        "name": "Grunt cssmin task",
                        "description": "Grunt cssmin task configuration file",
                        "fileMatch": ["cssmin.json"],
                        "url": "http://json.schemastore.org/grunt-cssmin-task"
                    },
                    {
                        "name": "Grunt JSHint task",
                        "description": "Grunt JSHint task configuration file",
                        "fileMatch": ["jshint.json"],
                        "url": "http://json.schemastore.org/grunt-jshint-task"
                    },
                    {
                        "name": "Grunt Watch task",
                        "description": "Grunt Watch task configuration file",
                        "fileMatch": ["watch.json"],
                        "url": "http://json.schemastore.org/grunt-watch-task"
                    },
                    {
                        "name": "Grunt base task",
                        "description": "Schema for standard Grunt tasks",
                        "fileMatch": ["grunt/*.json", "*-tasks.json"],
                        "url": "http://json.schemastore.org/grunt-task"
                    },
                    {
                        "name": "haxelib.json",
                        "description": "Haxelib manifest",
                        "fileMatch": ["haxelib.json"],
                        "url": "http://json.schemastore.org/haxelib"
                    },
                    {
                        "name": "host.json",
                        "description": "JSON schema for Azure Functions host.json files",
                        "fileMatch": ["host.json"],
                        "url": "http://json.schemastore.org/host"
                    },
                    {
                        "name": "host-meta.json",
                        "description": "Schema for host-meta JDR files",
                        "fileMatch": ["host-meta.json"],
                        "url": "http://json.schemastore.org/host-meta"
                    },
                    {
                        "name": ".htmlhintrc",
                        "description": "HTML Hint configuration file",
                        "fileMatch": [".htmlhintrc"],
                        "url": "http://json.schemastore.org/htmlhint"
                    },
                    {
                        "name": "imageoptimizer.json",
                        "description": "Schema for imageoptimizer.json files",
                        "fileMatch": ["imageoptimizer.json"],
                        "url": "http://json.schemastore.org/imageoptimizer"
                    },
                    {
                        "name": ".jsbeautifyrc",
                        "description": "js-beautify configuration file",
                        "fileMatch": [".jsbeautifyrc"],
                        "url": "http://json.schemastore.org/jsbeautifyrc"
                    },
                    {
                        "name": ".jsbeautifyrc-nested",
                        "description": "js-beautify configuration file allowing nested `js`, `css`, and `html` attributes",
                        "fileMatch": [".jsbeautifyrc"],
                        "url": "http://json.schemastore.org/jsbeautifyrc-nested"
                    },
                    {
                        "name": ".jscsrc",
                        "description": "JSCS configuration file",
                        "fileMatch": [".jscsrc", "jscsrc.json"],
                        "url": "http://json.schemastore.org/jscsrc"
                    },
                    {
                        "name": ".jshintrc",
                        "description": "JSHint configuration file",
                        "fileMatch": [".jshintrc"],
                        "url": "http://json.schemastore.org/jshintrc"
                    },
                    {
                        "name": ".jsinspectrc",
                        "description": "JSInspect configuration file",
                        "fileMatch": [".jsinspectrc"],
                        "url": "http://json.schemastore.org/jsinspectrc"
                    },
                    {
                        "name": "JSON-API",
                        "description": "JSON API document",
                        "fileMatch": ["*.schema.json"],
                        "url": "http://jsonapi.org/schema"
                    },
                    {
                        "name": "JSON Document Transform",
                        "description": "JSON Document Transofrm",
                        "url": "http://json.schemastore.org/jdt"
                    },
                    {
                        "name": "JSON Feed",
                        "description": "JSON schema for the JSON Feed format",
                        "fileMatch": ["feed.json"],
                        "url": "http://json.schemastore.org/feed"
                    },
                    {
                        "name": "*.jsonld",
                        "description": "JSON Linked Data files",
                        "fileMatch": ["*.jsonld"],
                        "url": "http://json.schemastore.org/jsonld"
                    },
                    {
                        "name": "JSONPatch",
                        "description": "JSONPatch files",
                        "fileMatch": ["*.patch"],
                        "url": "http://json.schemastore.org/json-patch"
                    },
                    {
                        "name": "jsconfig.json",
                        "description": "JavaScript project configuration file",
                        "fileMatch": ["jsconfig.json"],
                        "url": "http://json.schemastore.org/jsconfig"
                    },
                    {
                        "name": "launchsettings.json",
                        "description": "A JSON schema for the ASP.NET LaunchSettings.json files",
                        "fileMatch": ["launchsettings.json"],
                        "url": "http://json.schemastore.org/launchsettings"
                    },
                    {
                        "name": "libman.json",
                        "description": "JSON schema for client-side library config files",
                        "fileMatch": ["libman.json"],
                        "url": "http://json.schemastore.org/libman"
                    },
                    {
                        "name": "lsdlschema.json",
                        "description": "JSON schema for Linguistic Schema Definition Language files",
                        "fileMatch": ["*.lsdl.yaml"],
                        "url": "http://json.schemastore.org/lsdlschema"
                    },
                    {
                        "name": "Microsoft Band Web Tile",
                        "description": "Microsoft Band Web Tile manifest file",
                        "url": "http://json.schemastore.org/band-manifest"
                    },
                    {
                        "name": "mimetypes.json",
                        "description": "JSON Schema for mime type collections",
                        "fileMatch": ["mimetypes.json"],
                        "url": "http://json.schemastore.org/mimetypes"
                    },
                    {
                        "name": ".modernizrrc",
                        "description": "Webpack modernizr-loader configuration file",
                        "fileMatch": [".modernizrrc"],
                        "url": "http://json.schemastore.org/modernizrrc"
                    },
                    {
                        "name": "mycode.json",
                        "description": "JSON schema for mycode.js files",
                        "fileMatch": ["mycode.json"],
                        "url": "http://json.schemastore.org/mycode"
                    },
                    {
                        "name": "news in JSON",
                        "description": "A JSON Schema for ninjs by the IPTC. News and publishing information. See http://dev.iptc.org/ninjs",
                        "fileMatch": ["ninjs.json"],
                        "url": "http://json.schemastore.org/ninjs"
                    },
                    {
                        "name": "nuget-project.json",
                        "description": "JSON schema for NuGet project.json files.",
                        "url": "http://json.schemastore.org/nuget-project",
                        "versions": {
                            "3.3.0": "http://json.schemastore.org/nuget-project-3.3.0"
                        }
                    },
                    {
                        "name": "omnisharp.json",
                        "description": "Omnisharp Configuration file",
                        "fileMatch": ["omnisharp.json"],
                        "url": "http://json.schemastore.org/omnisharp"
                    },
                    {
                        "name": "openfin.json",
                        "description": "OpenFin application configuration file",
                        "url": "http://json.schemastore.org/openfin"
                    },
                    {
                        "name": "package.json",
                        "description": "NPM configuration file",
                        "fileMatch": ["package.json"],
                        "url": "http://json.schemastore.org/package"
                    },
                    {
                        "name": "package.manifest",
                        "description": "Umbraco package configuration file",
                        "fileMatch": ["package.manifest"],
                        "url": "http://json.schemastore.org/package.manifest"
                    },
                    {
                        "name": "pattern.json",
                        "description": "Patternplate pattern manifest file",
                        "fileMatch": ["pattern.json"],
                        "url": "http://json.schemastore.org/pattern"
                    },
                    {
                        "name": ".phraseapp.yml",
                        "description": "PhraseApp configuration file",
                        "fileMatch": [".phraseapp.yml"],
                        "url": "http://json.schemastore.org/phraseapp"
                    },
                    {
                        "name": "prettierrc.json",
                        "description": ".prettierrc configuration file",
                        "fileMatch": [".prettierrc", ".prettierrc.json"],
                        "url": "http://json.schemastore.org/prettierrc",
                        "versions": {
                            "1.8.2": "http://json.schemastore.org/prettierrc-1.8.2"
                        }
                    },
                    {
                        "name": "prisma.yml",
                        "description": "prisma.yml service definition file",
                        "fileMatch": ["prisma.yml"],
                        "url": "http://json.schemastore.org/prisma"
                    },
                    {
                        "name": "project.json",
                        "description": "ASP.NET vNext project configuration file",
                        "fileMatch": ["project.json"],
                        "url": "http://json.schemastore.org/project",
                        "versions": {
                            "1.0.0-beta3": "http://json.schemastore.org/project-1.0.0-beta3",
                            "1.0.0-beta4": "http://json.schemastore.org/project-1.0.0-beta4",
                            "1.0.0-beta5": "http://json.schemastore.org/project-1.0.0-beta5",
                            "1.0.0-beta6": "http://json.schemastore.org/project-1.0.0-beta6",
                            "1.0.0-beta8": "http://json.schemastore.org/project-1.0.0-beta8",
                            "1.0.0-rc1": "http://json.schemastore.org/project-1.0.0-rc1",
                            "1.0.0-rc1-update1": "http://json.schemastore.org/project-1.0.0-rc1",
                            "1.0.0-rc2": "http://json.schemastore.org/project-1.0.0-rc2"
                        }
                    },
                    {
                        "name": "project-1.0.0-beta3.json",
                        "description": "ASP.NET vNext project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-beta3"
                    },
                    {
                        "name": "project-1.0.0-beta4.json",
                        "description": "ASP.NET vNext project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-beta4"
                    },
                    {
                        "name": "project-1.0.0-beta5.json",
                        "description": "ASP.NET vNext project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-beta5"
                    },
                    {
                        "name": "project-1.0.0-beta6.json",
                        "description": "ASP.NET vNext project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-beta6"
                    },
                    {
                        "name": "project-1.0.0-beta8.json",
                        "description": "ASP.NET vNext project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-beta8"
                    },
                    {
                        "name": "project-1.0.0-rc1.json",
                        "description": "ASP.NET vNext project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-rc1"
                    },
                    {
                        "name": "project-1.0.0-rc2.json",
                        "description": ".NET Core project configuration file",
                        "url": "http://json.schemastore.org/project-1.0.0-rc2"
                    },
                    {
                        "name": "proxies.json",
                        "description": "JSON schema for Azure Function Proxies proxies.json files",
                        "fileMatch": ["proxies.json"],
                        "url": "http://json.schemastore.org/proxies"
                    },
                    {
                        "name": "*.resjson",
                        "description": "Windows App localization file",
                        "fileMatch": ["*.resjson"],
                        "url": "http://json.schemastore.org/resjson"
                    },
                    {
                        "name": "JSON Resume",
                        "description": "A JSON format to describe resumes",
                        "fileMatch": ["resume.json"],
                        "url": "http://json.schemastore.org/resume"
                    },
                    {
                        "name": "sarif-1.0.0.json",
                        "description": "Static Analysis Results Interchange Format (SARIF)",
                        "fileMatch": ["*.sarif", "*.sarif.json"],
                        "url": "http://json.schemastore.org/sarif",
                        "versions": {
                            "1.0.0-beta.4": "http://json.schemastore.org/sarif-1.0.0-beta.4.json",
                            "1.0.0-beta.5": "http://json.schemastore.org/sarif-1.0.0-beta.5.json",
                            "1.0.0": "http://json.schemastore.org/sarif-1.0.0"
                        }
                    },
                    {
                        "name": "sarif-1.0.0.json",
                        "description": "Static Analysis Results Interchange Format (SARIF)",
                        "url": "http://json.schemastore.org/sarif-1.0.0.json"
                    },
                    {
                        "name": "sarif-1.0.0-beta.5.json",
                        "description": "Static Analysis Results Interchange Format (SARIF)",
                        "url": "http://json.schemastore.org/sarif-1.0.0-beta.5.json"
                    },
                    {
                        "name": "sarif-1.0.0-beta.4.json",
                        "description": "Static Analysis Results Interchange Format (SARIF)",
                        "url": "http://json.schemastore.org/sarif-1.0.0-beta.4.json"
                    },
                    {
                        "name": "Schema Catalog",
                        "description": "JSON Schema catalog files compatible with SchemaStore.org",
                        "url": "http://json.schemastore.org/schema-catalog"
                    },
                    {
                        "name": "schema.org - Action",
                        "description": "JSON Schema for Action as defined by schema.org",
                        "url": "http://json.schemastore.org/schema-org-action"
                    },
                    {
                        "name": "schema.org - ContactPoint",
                        "description": "JSON Schema for ContactPoint as defined by schema.org",
                        "url": "http://json.schemastore.org/schema-org-contact-point"
                    },
                    {
                        "name": "schema.org - Place",
                        "description": "JSON Schema for Place as defined by schema.org",
                        "url": "http://json.schemastore.org/schema-org-place"
                    },
                    {
                        "name": "schema.org - Thing",
                        "description": "JSON Schema for Thing as defined by schema.org",
                        "url": "http://json.schemastore.org/schema-org-thing"
                    },
                    {
                        "name": "settings.job",
                        "description": "Azure Webjob settings file",
                        "fileMatch": ["settings.job"],
                        "url": "http://json.schemastore.org/settings.job"
                    },
                    {
                        "name": "skyuxconfig.json",
                        "description": "SKY UX CLI configuration file",
                        "fileMatch": ["skyuxconfig.json", "skyuxconfig.*.json"],
                        "url": "https://raw.githubusercontent.com/blackbaud/skyux-builder/master/skyuxconfig-schema.json"
                    },
                    {
                        "name": "Solidarity",
                        "description": "CLI config for enforcing environment settings",
                        "fileMatch": [".solidarity", ".solidarity.json"],
                        "url": "http://json.schemastore.org/solidaritySchema"
                    },
                    {
                        "name": "Source Maps v3",
                        "description": "Source Map files version 3",
                        "fileMatch": ["*.map"],
                        "url": "http://json.schemastore.org/sourcemap-v3"
                    },
                    {
                        "name": ".sprite files",
                        "description": "Schema for image sprite generation files",
                        "fileMatch": ["*.sprite"],
                        "url": "http://json.schemastore.org/sprite"
                    },
                    {
                        "name": "StyleCop Analyzers Configuration",
                        "description": "Configuration file for StyleCop Analyzers",
                        "fileMatch": ["stylecop.json"],
                        "url": "https://raw.githubusercontent.com/DotNetAnalyzers/StyleCopAnalyzers/master/StyleCop.Analyzers/StyleCop.Analyzers/Settings/stylecop.schema.json"
                    },
                    {
                        "name": ".stylelintrc",
                        "description": "Configuration file for stylelint",
                        "fileMatch": [".stylelintrc", "stylelintrc.json", ".stylelintrc.json"],
                        "url": "http://json.schemastore.org/stylelintrc"
                    },
                    {
                        "name": "Swagger API 2.0",
                        "description": "Swagger API 2.0 schema",
                        "fileMatch": ["swagger.json"],
                        "url": "http://json.schemastore.org/swagger-2.0"
                    },
                    {
                        "name": "template.json",
                        "description": "JSON schema .NET template files",
                        "fileMatch": [".template.config/template.json"],
                        "url": "http://json.schemastore.org/template"
                    },
                    {
                        "name": "templatsources.json",
                        "description": "SideWaffle template source schema",
                        "fileMatch": ["templatesources.json"],
                        "url": "http://json.schemastore.org/templatesources"
                    },
                    {
                        "name": ".travis.yml",
                        "description": "Travis CI configuration file",
                        "fileMatch": [".travis.yml"],
                        "url": "http://json.schemastore.org/travis"
                    },
                    {
                        "name": "tsconfig.json",
                        "description": "TypeScript compiler configuration file",
                        "fileMatch": ["tsconfig.json"],
                        "url": "http://json.schemastore.org/tsconfig"
                    },
                    {
                        "name": "tsd.json",
                        "description": "JSON schema for DefinatelyTyped description manager (TSD)",
                        "fileMatch": ["tsd.json"],
                        "url": "http://json.schemastore.org/tsd"
                    },
                    {
                        "name": "tsdrc.json",
                        "description": "TypeScript Definition manager (tsd) global settings file",
                        "fileMatch": [".tsdrc"],
                        "url": "http://json.schemastore.org/tsdrc"
                    },
                    {
                        "name": "tslint.json",
                        "description": "TypeScript Lint configuration file",
                        "fileMatch": ["tslint.json"],
                        "url": "http://json.schemastore.org/tslint"
                    },
                    {
                        "name": "typewiz.json",
                        "description": "Typewiz configuration file",
                        "fileMatch": ["typewiz.json"],
                        "url": "http://json.schemastore.org/typewiz"
                    },
                    {
                        "name": "typings.json",
                        "description": "Typings TypeScript definitions manager definition file",
                        "fileMatch": ["typings.json"],
                        "url": "http://json.schemastore.org/typings"
                    },
                    {
                        "name": "typingsrc.json",
                        "description": "Typings TypeScript definitions manager configuration file",
                        "fileMatch": [".typingsrc"],
                        "url": "http://json.schemastore.org/typingsrc"
                    },
                    {
                        "name": "up.json",
                        "description": "Up configuration file",
                        "fileMatch": ["up.json"],
                        "url": "http://json.schemastore.org/up.json"
                    },
                    {
                        "name": "ui5-manifest",
                        "description": "UI5/OPENUI5 descriptor file",
                        "fileMatch": [".manifest"],
                        "url": "http://json.schemastore.org/ui5-manifest"
                    },
                    {
                        "name": "vega.json",
                        "description": "Vega visualization specification file",
                        "fileMatch": ["*.vg", "*.vg.json"],
                        "url": "http://json.schemastore.org/vega"
                    },
                    {
                        "name": "vega-lite.json",
                        "description": "Vega-Lite visualization specification file",
                        "fileMatch": ["*.vl", "*.vl.json"],
                        "url": "http://json.schemastore.org/vega-lite"
                    },
                    {
                        "name": "version.json",
                        "description": "A project version descriptor file used by Nerdbank.GitVersioning",
                        "fileMatch": ["version.json"],
                        "url": "https://raw.githubusercontent.com/AArnott/Nerdbank.GitVersioning/master/src/NerdBank.GitVersioning/version.schema.json"
                    },
                    {
                        "name": "vsls.json",
                        "description": "Visual Studio Live Share configuration file",
                        "fileMatch": [".vsls.json"],
                        "url": "http://json.schemastore.org/vsls"
                    },
                    {
                        "name": "vs-2017.3.host.json",
                        "description": "JSON schema for Visual Studio template host file",
                        "fileMatch": ["vs-2017.3.host.json"],
                        "url": "http://json.schemastore.org/vs-2017.3.host"
                    },
                    {
                        "name": "vs-nesting.json",
                        "description": "JSON schema for Visual Studio's file nesting feature",
                        "fileMatch": ["*.filenesting.json", ".filenesting.json"],
                        "url": "http://json.schemastore.org/vs-nesting"
                    },
                    {
                        "name": ".vsext",
                        "description": "JSON schema for Visual Studio extension pack manifests",
                        "fileMatch": ["*.vsext"],
                        "url": "http://json.schemastore.org/vsext"
                    },
                    {
                        "name": "VSIX CLI publishing",
                        "description": "JSON schema for Visual Studio extension publishing",
                        "fileMatch": ["vs-publish.json"],
                        "url": "http://json.schemastore.org/vsix-publish"
                    },
                    {
                        "name": "Web Extensions",
                        "description": "JSON schema for Web Extensions manifest files",
                        "url": "http://json.schemastore.org/webextension"
                    },
                    {
                        "name": "Web Manifest",
                        "description": "Web Application manifest file",
                        "fileMatch": ["manifest.json", "*.webmanifest"],
                        "url": "http://json.schemastore.org/web-manifest"
                    },
                    {
                        "name": "webjobs-list.json",
                        "description": "Azure Webjob list file",
                        "fileMatch": ["webjobs-list.json"],
                        "url": "http://json.schemastore.org/webjobs-list"
                    },
                    {
                        "name": "webjobpublishsettings.json",
                        "description": "Azure Webjobs publish settings file",
                        "fileMatch": ["webjobpublishsettings.json"],
                        "url": "http://json.schemastore.org/webjob-publish-settings"
                    },
                    {
                        "name": "JSON-stat 2.0",
                        "description": "JSON-stat 2.0 Schema",
                        "url": "https://json-stat.org/format/schema/2.0/"
                    },
                    {
                        "name": "KSP-CKAN 1.22",
                        "description": "Metadata spec v1.22 for KSP-CKAN",
                        "fileMatch": ["*.ckan"],
                        "url": "http://json.schemastore.org/ksp-ckan-1.16"
                    },
                    {
                        "name": "JSON Schema Draft 4",
                        "description": "Meta-validation schema for JSON Schema Draft 4",
                        "url": "http://json-schema.org/draft-04/schema"
                    },
                    {
                        "name": "xunit.runner.json",
                        "description": "xUnit.net runner configuration file",
                        "fileMatch": ["xunit.runner.json"],
                        "url": "http://json.schemastore.org/xunit.runner.schema"
                    },
                    {
                        "name": ".cryproj engine-5.2",
                        "description": "A JSON schema for CRYENGINE projects (.cryproj files)",
                        "fileMatch": ["*.cryproj"],
                        "url": "http://json.schemastore.org/cryproj.52.schema"
                    },
                    {
                        "name": ".cryproj engine-5.3",
                        "description": "A JSON schema for CRYENGINE projects (.cryproj files)",
                        "fileMatch": ["*.cryproj"],
                        "url": "http://json.schemastore.org/cryproj.53.schema"
                    },
                    {
                        "name": ".cryproj engine-5.4",
                        "description": "A JSON schema for CRYENGINE projects (.cryproj files)",
                        "fileMatch": ["*.cryproj"],
                        "url": "http://json.schemastore.org/cryproj.54.schema"
                    },
                    {
                        "name": ".cryproj engine-5.5",
                        "description": "A JSON schema for CRYENGINE projects (.cryproj files)",
                        "fileMatch": ["*.cryproj"],
                        "url": "http://json.schemastore.org/cryproj.55.schema"
                    },
                    {
                        "name": ".cryproj engine-dev",
                        "description": "A JSON schema for CRYENGINE projects (.cryproj files)",
                        "fileMatch": ["*.cryproj"],
                        "url": "http://json.schemastore.org/cryproj.dev.schema"
                    },
                    {
                        "name": ".cryproj (generic)",
                        "description": "A JSON schema for CRYENGINE projects (.cryproj files)",
                        "fileMatch": ["*.cryproj"],
                        "url": "http://json.schemastore.org/cryproj"
                    }
                ],
            },
        }
        self.env = {}


class CodeIntelJsonPlugin(LanguageHandler):
    def __init__(self):
        self._server_name = "JSON Language Server"
        self._config = CodeIntelJsonClientConfig()

    @property
    def name(self) -> str:
        return self._config.name

    @property
    def config(self) -> ClientConfig:
        return self._config

    def on_start(self, window) -> bool:
        if not node_is_installed():
            window.status_message(
                "{} must be installed to run {}".format(node_command()), self._server_name)
            return False
        return True

    def on_initialized(self, client) -> None:
        client.on_notification("textDocument/publishDiagnostics", self.on_diagnostics)

    def on_diagnostics(self, params):
        spinner.start("JSON-CodeIntel", spinner='monkey')


def plugin_loaded():
    if not node_is_installed():
        sublime.message_dialog(
            "Please install Node.js")
