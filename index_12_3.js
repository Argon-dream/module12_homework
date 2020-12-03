
function fun(proto)
{
   const instance = Object.create(proto);
   return console.log(instance);
}

fun(null);