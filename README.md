# ts-jest-build-error
A minimal repo to reproduce a rare test failure related to how ts-jest handles ts modules

# Steps to reproduce
cd localLib
   (sudo) npm link
   
cd ../main
   npm install
   npm link localLib
   npm run clearJest
   npm test  => success
   
   (sudo) rm -rf node_modules/localLib
   cp -r ../localLib node_modules
   npm run clearJest
   npm test => failure