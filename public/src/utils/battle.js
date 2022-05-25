function battle (playerOneCard, playerTwoCard, player){
    let multiplicator = 1;
    let dmg = 0;
    if (player === 'playerOne'){
        if (playerOneCard.type[0] === 'Steel'|| playerOneCard.type[1] === 'Steel'){
            if (playerTwoCard.type[0] === 'Rock' || 
            playerTwoCard.type[1] === 'Rock'||
            playerTwoCard.type[0] === 'Ice' ||
            playerTwoCard.type[1] === 'Ice'){
            multiplicator = 2;
        }
        } else if (playerOneCard.type[0] === 'Water'|| playerOneCard.type[1] === 'Water'){
            if (playerTwoCard.type[0] === 'Fire' || 
            playerTwoCard.type[1] === 'Fire'||
            playerTwoCard.type[0] === 'Rock' ||
            playerTwoCard.type[1] === 'Rock'||
            playerTwoCard.type[0] === 'ground' ||
            playerTwoCard.type[1] === 'ground'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Flying'|| playerOneCard.type[1] === 'Flying'){
            if (playerTwoCard.type[0] === 'Grass'||
            playerTwoCard.type[1] === 'Grass'||
            playerTwoCard.type[0] === 'Fighting'||
            playerTwoCard.type[1] === 'Fighting'||
            playerTwoCard.type[0] === 'Bug'||
            playerTwoCard.type[1] === 'Bug'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Ice'|| playerOneCard.type[1] === 'Ice'){
            if (playerTwoCard.type[0] === 'Flying'||
            playerTwoCard.type[1] === 'Flying'||
            playerTwoCard.type[0] === 'Grass'||
            playerTwoCard.type[1] === 'Grass'||
            playerTwoCard.type[0] === 'Ground'||
            playerTwoCard.type[1] === 'Ground'||
            playerTwoCard.type[0] === 'Dragon'||
            playerTwoCard.type[1] === 'Dragon'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0]==='Grass'|| playerOneCard.type[1] === 'Grass'){
            if (playerOneCard.type[0]==='Water'||
            playerOneCard.type[1]==='Water'||
            playerOneCard.type[0]==='Rock'||
            playerOneCard.type[1]==='Rock'||
            playerOneCard.type[0]==='Ground'||
            playerOneCard.type[1]==='Ground'){
            multiplicator = 2;
            }
        } else if (playerOneCard.type[0]==='Bug' || playerOneCard.type[1] === 'Bug'){
            if (playerOneCard.type[0]==='Grass'||
            playerOneCard.type[1]==='Grass'||
            playerOneCard.type[0]==='Psychic'||
            playerOneCard.type[1]==='Psychic'||
            playerOneCard.type[0]==='Dark'||
            playerOneCard.type[1]==='Dark'){
            multiplicator = 2;
            }
        } else if (playerOneCard.type[0] === 'Electric'|| playerOneCard.type[1] === 'Electric'){
            if (playerTwoCard.type[0] === 'Water'||
            playerTwoCard.type[1] === 'Water'||
            playerTwoCard.type[0] === 'Flying'||
            playerTwoCard.type[1] === 'Flying'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Rock'|| playerOneCard.type[1] === 'Rock'){
            if (playerTwoCard.type[0] === 'Bug'||
            playerTwoCard.type[1] === 'Bug'||
            playerTwoCard.type[0] === 'Fire'||
            playerTwoCard.type[1] === 'Fire'||
            playerTwoCard.type[0] === 'Ice'||
            playerTwoCard.type[1] === 'Ice'||
            playerTwoCard.type[0] === 'Flying'||
            playerTwoCard.type[1] === 'Flying'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Ground'|| playerOneCard.type[1] === 'Ground'){
            if (playerTwoCard.type[0] === 'Fire'||
            playerTwoCard.type[1] === 'Fire'||
            playerTwoCard.type[0] === 'Electric'||
            playerTwoCard.type[1] === 'Electric'||
            playerTwoCard.type[0] === 'Poison'||
            playerTwoCard.type[1] === 'Poison'||
            playerTwoCard.type[0] === 'Rock'||
            playerTwoCard.type[1] === 'Rock'||
            playerTwoCard.type[0] === 'Steel'||
            playerTwoCard.type[1] === 'Steel'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Fire' || playerOneCard.type[1] === 'Fire'){
            if (playerTwoCard.type[0] === 'Ice'||
            playerTwoCard.type[1] === 'Ice'||
            playerTwoCard.type[0] === 'Grass'||
            playerTwoCard.type[1] === 'Grass'||
            playerTwoCard.type[0] === 'Bug'||
            playerTwoCard.type[1] === 'Bug'||
            playerTwoCard.type[0] === 'Steel'||
            playerTwoCard.type[1] === 'Steel'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Fighting'|| playerOneCard.type[1] === 'Fighting'){
            if (playerTwoCard.type[0] === 'Ice'||
            playerTwoCard.type[1] === 'Ice'||
            playerTwoCard.type[0] === 'Normal'||
            playerTwoCard.type[1] === 'Normal'||
            playerTwoCard.type[0] === 'Rock'||
            playerTwoCard.type[1] === 'Rock'||
            playerTwoCard.type[0] === 'Dark'||
            playerTwoCard.type[1] === 'Dark'||
            playerTwoCard.type[0] === 'Steel'||
            playerTwoCard.type[1] === 'Steel'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Fairy'|| playerOneCard.type[1] === 'Fairy'){
            if (playerTwoCard.type[0] === 'Fighting'||
            playerTwoCard.type[1] === 'Fighting'||
            playerTwoCard.type[0] === 'Dragon'||
            playerTwoCard.type[1] === 'Dragon'||
            playerTwoCard.type[0] === 'Dark'||
            playerTwoCard.type[1] === 'Dark'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Psychic' || playerOneCard.type[1] === 'Psychic'){
            if (playerTwoCard.type[0] === 'Fighting'||
            playerTwoCard.type[1] === 'Fighting'||
            playerTwoCard.type[0] === 'Poison'||
            playerTwoCard.type[1] === 'Poison'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Poison' || playerOneCard.type[1] === 'Poison'){
            if (playerTwoCard.type[0] === 'Grass'||
            playerTwoCard.type[1] === 'Grass'||
            playerTwoCard.type[0] === 'Fairy'||
            playerTwoCard.type[1] === 'Fairy'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Dragon' || playerOneCard.type[1] === 'Dragon'){
            if (playerTwoCard.type[0] === 'Dragon'||
            playerTwoCard.type[1] === 'Dragon'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Ghost' || playerOneCard.type[1] === 'Ghost'){
            if (playerTwoCard.type[0] === 'Ghost'||
            playerTwoCard.type[1] === 'Ghost'||
            playerTwoCard.type[0] === 'Psychic'||
            playerTwoCard.type[1] === 'Psychic'){
            multiplicator = 2;
            } 
        } else if (playerOneCard.type[0] === 'Dark' || playerOneCard.type[1] === 'Dark'){
            if (playerTwoCard.type[0] === 'Psychic'||
            playerTwoCard.type[1] === 'Psychic'||
            playerTwoCard.type[0] === 'Ghost'||
            playerTwoCard.type[1] === 'Ghost'){
            multiplicator = 2;
            } 
        }
        dmg = ((playerOneCard.base.Attack + playerOneCard.base.SpAttack) - 
        (playerTwoCard.base.Defense + playerTwoCard.base.SpDefense))*multiplicator;
    } else if (player === 'playerTwo'){
        if (playerTwoCard.type[0] === 'Steel' || playerTwoCard.type[1] === 'Steel'){
            if (playerOneCard.type[0] === 'Rock'||
            playerOneCard.type[1] === 'Rock'||
            playerOneCard.type[0] === 'Ice'||
            playerOneCard.type[1] === 'Ice'){
            multiplicator = 2;
            }
    } else if (playerTwoCard.type[0] === 'Water' || playerTwoCard.type[1] === 'Water'){
        if (playerOneCard.type[0] === 'Fire'||
        playerOneCard.type[1] === 'Fire'||
        playerOneCard.type[0] === 'Rock'||
        playerOneCard.type[1] === 'Rock'||
        playerOneCard.type[0] === 'Ground'||
        playerOneCard.type[1] === 'Ground'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Flying' || playerTwoCard.type[1] === 'Flying'){
        if (playerOneCard.type[0] === 'Grass'||
        playerOneCard.type[1] === 'Grass'||
        playerOneCard.type[0] === 'Fighting'||
        playerOneCard.type[1] === 'Fighting'||
        playerOneCard.type[0] === 'Bug'||
        playerOneCard.type[1] === 'Bug'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Ice' || playerTwoCard.type[1] === 'Ice'){
        if (playerOneCard.type[0] === 'Flying'||
        playerOneCard.type[1] === 'Flying'||
        playerOneCard.type[0] === 'Grass'||
        playerOneCard.type[1] === 'Grass'||
        playerOneCard.type[0] === 'Ground'||
        playerOneCard.type[1] === 'Ground'||
        playerOneCard.type[0] === 'Dragon'||
        playerOneCard.type[1] === 'Dragon'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Grass' || playerTwoCard.type[1] === 'Grass'){
        if (playerOneCard.type[0] === 'Water'||
        playerOneCard.type[1] === 'Water'||
        playerOneCard.type[0] === 'Ground'||
        playerOneCard.type[1] === 'Ground'||
        playerOneCard.type[0] === 'Rock'||
        playerOneCard.type[1] === 'Rock'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Bug' || playerTwoCard.type[1] === 'Bug'){
        if (playerOneCard.type[0] === 'Grass'||
        playerOneCard.type[1] === 'Grass'||
        playerOneCard.type[0] === 'Psychic'||
        playerOneCard.type[1] === 'Psychic'||
        playerOneCard.type[0] === 'Dark'||
        playerOneCard.type[1] === 'Dark'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Electric' || playerTwoCard.type[1] === 'Electric'){
        if (playerOneCard.type[0] === 'Flying'||
        playerOneCard.type[1] === 'Flying'||
        playerOneCard.type[0] === 'Water'||
        playerOneCard.type[1] === 'Water'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Rock' || playerTwoCard.type[1] === 'Rock'){
        if (playerOneCard.type[0] === 'Flying'||
        playerOneCard.type[1] === 'Flying'||
        playerOneCard.type[0] === 'Bug'||
        playerOneCard.type[1] === 'Bug'||
        playerOneCard.type[0] === 'Fire'||
        playerOneCard.type[1] === 'Fire'||
        playerOneCard.type[0] === 'Ice'||
        playerOneCard.type[1] === 'Ice'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Ground' || playerTwoCard.type[1] === 'Ground'){
        if (playerOneCard.type[0] === 'Poison'||
        playerOneCard.type[1] === 'Poison'||
        playerOneCard.type[0] === 'Rock'||
        playerOneCard.type[1] === 'Rock'||
        playerOneCard.type[0] === 'Steel'||
        playerOneCard.type[1] === 'Steel'||
        playerOneCard.type[0] === 'Fire'||
        playerOneCard.type[1] === 'Fire'||
        playerOneCard.type[0] === 'Electric'||
        playerOneCard.type[1] === 'Electric'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Fire' || playerTwoCard.type[1] === 'Fire'){
        if (playerOneCard.type[0] === 'Ice'||
        playerOneCard.type[1] === 'Ice'||
        playerOneCard.type[0] === 'Bug'||
        playerOneCard.type[1] === 'Bug'||
        playerOneCard.type[0] === 'Steel'||
        playerOneCard.type[1] === 'Steel'||
        playerOneCard.type[0] === 'Grass'||
        playerOneCard.type[1] === 'Grass'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Fighting' || playerTwoCard.type[1] === 'Fighting'){
        if (playerOneCard.type[0] === 'Normal'||
        playerOneCard.type[1] === 'Normal'||
        playerOneCard.type[0] === 'Ice'||
        playerOneCard.type[1] === 'Ice'||
        playerOneCard.type[0] === 'Rock'||
        playerOneCard.type[1] === 'Rock'||
        playerOneCard.type[0] === 'Dark'||
        playerOneCard.type[1] === 'Dark'||
        playerOneCard.type[0] === 'Steel'||
        playerOneCard.type[1] === 'Steel'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Fairy' || playerTwoCard.type[1] === 'Fairy'){
        if (playerOneCard.type[0] === 'Fighting'||
        playerOneCard.type[1] === 'Fighting'||
        playerOneCard.type[0] === 'Dragon'||
        playerOneCard.type[1] === 'Dragon'||
        playerOneCard.type[0] === 'Dark'||
        playerOneCard.type[1] === 'Dark'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Psychic' || playerTwoCard.type[1] === 'Psychic'){
        if (playerOneCard.type[0] === 'Fighting'||
        playerOneCard.type[1] === 'Fighting'||
        playerOneCard.type[0] === 'Poison'||
        playerOneCard.type[1] === 'Poison'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Poison' || playerTwoCard.type[1] === 'Poison'){
        if (playerOneCard.type[0] === 'Grass'||
        playerOneCard.type[1] === 'Grass'||
        playerOneCard.type[0] === 'Fairy'||
        playerOneCard.type[1] === 'Fairy'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Dragon' || playerTwoCard.type[1] === 'Dragon'){
        if (playerOneCard.type[0] === 'Dragon'||
        playerOneCard.type[1] === 'Dragon'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Ghost' || playerTwoCard.type[1] === 'Ghost'){
        if (playerOneCard.type[0] === 'Ghost'||
        playerOneCard.type[1] === 'Ghost'||
        playerOneCard.type[0] === 'Psychic'||
        playerOneCard.type[1] === 'Psychic'){
        multiplicator = 2;
        }
    } else if (playerTwoCard.type[0] === 'Dark' || playerTwoCard.type[1] === 'Dark'){
        if (playerOneCard.type[0] === 'Psychic'||
        playerOneCard.type[1] === 'Psychic'||
        playerOneCard.type[0] === 'Ghost'||
        playerOneCard.type[1] === 'Ghost'){
        multiplicator = 2;
        }
    }
        dmg = ((playerTwoCard.base.Attack+playerTwoCard.base.SpAttack)-(playerOneCard.base.Defense+playerOneCard.base.SpDefense))*multiplicator;
    }
    if (dmg < 1){
        dmg = 7 * multiplicator;
    }
    return dmg;
}
export default battle;