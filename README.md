# DarcOS - Web-Based OS for Exploring Darcy128 ISA

A web-based operating system designed for exploring the novel Darcy128 ISA (Instruction Set Architecture) and HIPS128 processor architecture. Built on the foundation of 32-bit MIPS instructions, DarcOS serves as an educational platform for understanding theoretical 128-bit processor concepts.

## Usage

```bash
$ npm install

$ npm start
```

## Directories

```md
.
├── README.md
├── ice.config.mts                  # The project config.
├── package.json
├── .browserslistrc                 # Browsers that support.
├── public                          # Static files.
├── src                             # Application source code.
│   ├── app.ts                      # The app entry.
│   ├── assets                      # Assets directory.
│   ├── document.tsx                # The document entry.
│   ├── components                  # Components directory.
│   ├── pages                       # Pages directory.
│   │   ├── index.module.css        # Index page style.
│   │   └── index.tsx               # Index page component.
│   └── typings.d.ts                # The type definition.
└── tsconfig.json
```

> Note: The resources in `public` directory will be completely copied to the `output` directory during the build phase, and the filename will not be changed.

For more detail, please visit [docs](https://v3.ice.work/).
