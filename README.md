# PortfolioAngularYassineKerfai

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## GitHub Actions and Docker

The workflow in `.github/workflows/ci.yml` runs the production build, unit tests,
SonarQube analysis, Docker image build, and GHCR publication on non-pull-request
events. It also creates a PDF report and uploads it as an artifact.

Configure these repository secrets before enabling email and SonarQube reporting:

- `SONAR_TOKEN` and `SONAR_HOST_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`, and optionally `SMTP_FROM`
- optionally `CI_REPORT_EMAIL` as a fallback recipient when GitHub does not expose the author's public email

The report is addressed to the triggering GitHub account's public email when
available, otherwise its GitHub noreply address. SMTP secrets are intentionally
optional so pull requests from forks can still run the build and test stages.

Build the production image locally with:

```bash
docker build -t portfolio-angular-yassine-kerfai .
docker run --rm -p 8080:80 portfolio-angular-yassine-kerfai
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
