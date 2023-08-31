:: Initialize static variable to reduce the redundant

SET F="KBTG Techtopia"


:: Cleanup working space folder
IF EXIST %F% RMDIR /S /Q %F%

mkdir %F%

cd %F%


:: Reclone the project

git clone https://github.com/kbtg-techtopia-code-off/codeoff-rps.git .

git checkout -b %1