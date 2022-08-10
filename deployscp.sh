#!/usr/bin/env sh

# abort on errors
set -e

# build
#npm run build


# tar cfv drp.tar dist#
scp -r dist/ mxgdlweb01@10.10.102.33:~/html

# ssh  mxgdlweb01@10.10.102.33 '~/deploy.sh'
ssh  mxgdlweb01@10.10.102.33 'sudo \cp -vr html/* /var/www/drpmexico.com/html/'


