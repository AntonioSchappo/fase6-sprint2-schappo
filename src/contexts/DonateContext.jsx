"use client";

import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid"

export const DonateContext = createContext({});

export default function DonateProvider({ children }) {
  const { setItems, getItem } = useLocalStorage("fome-zero-donations");

  /**
   * @param {Donation} donation
   * @returns {boolean}
   */
  function RegisterDonation(donation) {
    const newDonation = {
      donationID: uuid(),
      companyName: donation.companyName,
      companyCnpj: donation.companyCnpj,
      ongName: donation.ongName,
      ongID: donation.ongID,
      type: donation.type,
      items: donation.items,
      data: donation.data,
      status: "em-aberto",
    };

    setItems(newDonation);
    return true;
  }

  /**
   * @param {string} donationID
   * @returns {Donation}
   */
  function GetDonation(donationID) {
    const donations = getItem();
    return donations.find((donation) => donation.donationID === donationID);
  }

  /**
   * @param {string} ongID
   * @returns {Donation}
   */
  function GetDonationsByOng(ongID) {
    const donations = getItem();
    return donations.filter((donation) => donation.ongID === ongID);
  }

  /**
   * @param {string} companyCnpj
   * @returns {Donation}
   */
  function GetDonationsByCompany(companyCnpj) {
    const donations = getItem();
    return donations.filter((donation) => donation.companyCnpj === companyCnpj);
  }

  /**
   * @param {string} donationID
   * @param {"em-aberto" | "processando" | "concluido" | "cancelado"} status
   * @returns {boolean}
   */
  function UpdateDonationStatus(donationID, status) {
    const donations = getItem();
    const donationIndex = donations.findIndex(
      (donation) => donation.donationID === donationID
    );
    donations[donationIndex].status = status;
    setItems(donations);
    return true;
  }

  return (
    <DonateContext.Provider
      value={{
        RegisterDonation,
        GetDonation,
        GetDonationsByCompany,
        GetDonationsByOng,
        UpdateDonationStatus,
      }}
    >
      {children}
    </DonateContext.Provider>
  );
}
