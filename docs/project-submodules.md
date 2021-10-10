# Project submodules

This project has its content as git submodule in `super-blog-content` folder.


## To pull updated content run

```shell
git submodule update --recursive --remote
```

## Pull **one** submodule only

* Change to the submodule directory
cd submodule_dir

* Checkout desired branch
git checkout main

* Update
git pull

* Get back to your project root
cd ..

* Now the submodules are in the state you want, so
git commit -am "Pulled down update to submodule_dir"

## Pull *all* submodules:

```shell
git submodule foreach git pull origin main
```

## Pull submodules *manually*

This is useful for this project if you want to have different test branches and not `main` on every project

```shell
cd super-blog-content/ && git pull && cd .. && cd super-styleguide/ && git pull && cd ..
```
