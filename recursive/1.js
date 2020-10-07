// 二叉树，递归

const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right:{
    val: 'C',
    right: {
      val: 'F'
    }
  }
}


// 先序遍历 根-》左-》右
function preorder(root) {
  if(!root){
    return
  }

  // console.log('当前遍历的节点值是：',root.val);
  preorder(root.left)
  preorder(root.right)
}

// preorder(root);


// 中序遍历 左-》根-》右
function inorder(root) {
  if(!root){
    return
  }

  inorder(root.left)
  console.log('当前遍历的节点是：',root.val);
  inorder(root.right)
}

// inorder(root)


// 后序遍历 左-》右-》根
function postorder(root) {
  if(!root){
    return
  }

  postorder(root.left)
  postorder(root.right)
  console.log('当前遍历的节点是：',root.val);
}

postorder(root)