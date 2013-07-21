# export HOME=C:/Users/Administrator

closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=good/ \
  --namespace="good.auth.login" \
  --output_mode=compiled \
  --compiler_jar=$HOME/.m2/repository/com/goodow/javascript/closure-compiler/v20130603-SNAPSHOT/closure-compiler-v20130603-SNAPSHOT.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  --compiler_flags="--externs=good/realtime/realtime.externs.js" \
  --compiler_flags="--create_source_map=good/auth/login.js.map" \
  > good/auth/login-compiled.js
echo //@ sourceMappingURL=login.js.map >> good/auth/login-compiled.js

closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=good/ \
  --namespace="good.auth.signup" \
  --output_mode=compiled \
  --compiler_jar=$HOME/.m2/repository/com/goodow/javascript/closure-compiler/v20130603-SNAPSHOT/closure-compiler-v20130603-SNAPSHOT.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  --compiler_flags="--externs=good/realtime/realtime.externs.js" \
  --compiler_flags="--create_source_map=good/auth/signup.js.map" \
  > good/auth/signup-compiled.js
echo //@ sourceMappingURL=signup.js.map >> good/auth/signup-compiled.js