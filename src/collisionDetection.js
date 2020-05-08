export function detectCollision(ball, gameObject) {
  var ballBottom = ball.position.y + ball.size;
  var ballTop = ball.position.y;
  var gameObjectBottom = gameObject.position.y + gameObject.height;
  var gameObjectLeft = gameObject.position.x;
  var gameObjectRight = gameObject.position.x + gameObject.width;
  var gameObjectTop = gameObject.position.y;
  
  if(
    ballBottom >= gameObjectTop &&
    ballTop <= gameObjectBottom &&
    ball.position.x >= gameObjectLeft && 
    ball.position.x + ball.size <= gameObjectRight
  ) {
    return true;
  } else {
    return false;
  }

}