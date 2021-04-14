import React from "react";
import {AddressBody, AddressCard, AddressHeader, ButtonGroup, DeleteButton, EditButton} from "./item";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function AddressCardItem (props){
    const {isOpenDialog, address, deleteAddress, editAddress} = props;
    return(
      <AddressCard>
          <AddressHeader>
              Главный Адрес
              <ButtonGroup>
                  <EditButton onClick={editAddress}>
                      <EditIcon style={{fontSize: '1.4em'}}/>
                  </EditButton>
                  <DeleteButton onClick={deleteAddress}>
                      <DeleteIcon style={{fontSize: '1.4em'}}/>
                  </DeleteButton>
              </ButtonGroup>
          </AddressHeader>
          <AddressBody>
              {address}
          </AddressBody>
      </AddressCard>
    );
}