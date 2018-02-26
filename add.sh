#!/bin/bash

mkdir src/blocks/$1;

for i in ${@:2}
do
    if [ $i == "js" ] || [ $i == "less" ];then
        touch src/blocks/$1/$1.$i

	if [ $i == "less" ];then
            #Less
            echo '/* '$1' ***********************/' >> src/blocks/$1/$1.less
            echo '.'$1' {}' >> src/blocks/$1/$1.less
            printf '\n@import "../blocks/'$1'/'$1'";' >> src/less/common.less
            echo $1'.less created';
	fi
	if [ $i == "js" ];then
            #JS
            varName=$1
            original_string=$varName
            replace_string=''
            result_string=$original_string

            echo '/* '$1' ***********************/' >> src/blocks/$1/$1.js
printf "$.fn.$result_string = function () {
};" >> src/blocks/$1/$1.js
         #   sed -i '/\/\/blocksInitPlace/a '$result_string'.init();'  src/js/common.js

            echo $1'.js created';
	fi
    fi
done