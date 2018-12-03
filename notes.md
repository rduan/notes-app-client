aws s3 sync build/ s3://notes-app-client-ph --delete

aws cloudfront create-invalidation --distribution-id YOUR_CF_DISTRIBUTION_ID --paths "/*"

aws cloudfront create-invalidation --distribution-id EPZGAQ3RQ2PUY --paths "/*"