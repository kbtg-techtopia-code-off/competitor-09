:: Initialize static variable to reduce the redundant

SET F="KBTG Techtopia"


:: Cleanup working space folder
IF EXIST %F% RMDIR /S /Q %F%

mkdir %F%

cd %F%


:: Reclone the project

:: Replace the code-off rps in the Git URL with the parameter
SET "GIT_URL=https://github.com/kbtg-techtopia-code-off/%1.git"

git clone %GIT_URL% .

git checkout -b %1