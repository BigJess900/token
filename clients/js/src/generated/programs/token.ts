/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  containsBytes,
  getU8Encoder,
  type Address,
  type ReadonlyUint8Array,
} from '@solana/web3.js';
import {
  type ParsedAmountToUiAmountInstruction,
  type ParsedApproveCheckedInstruction,
  type ParsedApproveInstruction,
  type ParsedBurnCheckedInstruction,
  type ParsedBurnInstruction,
  type ParsedCloseAccountInstruction,
  type ParsedFreezeAccountInstruction,
  type ParsedGetAccountDataSizeInstruction,
  type ParsedInitializeAccount2Instruction,
  type ParsedInitializeAccount3Instruction,
  type ParsedInitializeAccountInstruction,
  type ParsedInitializeImmutableOwnerInstruction,
  type ParsedInitializeMint2Instruction,
  type ParsedInitializeMintInstruction,
  type ParsedInitializeMultisig2Instruction,
  type ParsedInitializeMultisigInstruction,
  type ParsedMintToCheckedInstruction,
  type ParsedMintToInstruction,
  type ParsedRevokeInstruction,
  type ParsedSetAuthorityInstruction,
  type ParsedSyncNativeInstruction,
  type ParsedThawAccountInstruction,
  type ParsedTransferCheckedInstruction,
  type ParsedTransferInstruction,
  type ParsedUiAmountToAmountInstruction,
} from '../instructions';

export const TOKEN_PROGRAM_ADDRESS =
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;

export enum TokenAccount {
  Mint,
  Token,
  Multisig,
}

export function identifyTokenAccount(
  account: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): TokenAccount {
  const data = 'data' in account ? account.data : account;
  if (data.length === 82) {
    return TokenAccount.Mint;
  }
  if (data.length === 165) {
    return TokenAccount.Token;
  }
  if (data.length === 355) {
    return TokenAccount.Multisig;
  }
  throw new Error(
    'The provided account could not be identified as a token account.'
  );
}

export enum TokenInstruction {
  InitializeMint,
  InitializeAccount,
  InitializeMultisig,
  Transfer,
  Approve,
  Revoke,
  SetAuthority,
  MintTo,
  Burn,
  CloseAccount,
  FreezeAccount,
  ThawAccount,
  TransferChecked,
  ApproveChecked,
  MintToChecked,
  BurnChecked,
  InitializeAccount2,
  SyncNative,
  InitializeAccount3,
  InitializeMultisig2,
  InitializeMint2,
  GetAccountDataSize,
  InitializeImmutableOwner,
  AmountToUiAmount,
  UiAmountToAmount,
}

export function identifyTokenInstruction(
  instruction: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): TokenInstruction {
  const data = 'data' in instruction ? instruction.data : instruction;
  if (containsBytes(data, getU8Encoder().encode(0), 0)) {
    return TokenInstruction.InitializeMint;
  }
  if (containsBytes(data, getU8Encoder().encode(1), 0)) {
    return TokenInstruction.InitializeAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(2), 0)) {
    return TokenInstruction.InitializeMultisig;
  }
  if (containsBytes(data, getU8Encoder().encode(3), 0)) {
    return TokenInstruction.Transfer;
  }
  if (containsBytes(data, getU8Encoder().encode(4), 0)) {
    return TokenInstruction.Approve;
  }
  if (containsBytes(data, getU8Encoder().encode(5), 0)) {
    return TokenInstruction.Revoke;
  }
  if (containsBytes(data, getU8Encoder().encode(6), 0)) {
    return TokenInstruction.SetAuthority;
  }
  if (containsBytes(data, getU8Encoder().encode(7), 0)) {
    return TokenInstruction.MintTo;
  }
  if (containsBytes(data, getU8Encoder().encode(8), 0)) {
    return TokenInstruction.Burn;
  }
  if (containsBytes(data, getU8Encoder().encode(9), 0)) {
    return TokenInstruction.CloseAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(10), 0)) {
    return TokenInstruction.FreezeAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(11), 0)) {
    return TokenInstruction.ThawAccount;
  }
  if (containsBytes(data, getU8Encoder().encode(12), 0)) {
    return TokenInstruction.TransferChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(13), 0)) {
    return TokenInstruction.ApproveChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(14), 0)) {
    return TokenInstruction.MintToChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(15), 0)) {
    return TokenInstruction.BurnChecked;
  }
  if (containsBytes(data, getU8Encoder().encode(16), 0)) {
    return TokenInstruction.InitializeAccount2;
  }
  if (containsBytes(data, getU8Encoder().encode(17), 0)) {
    return TokenInstruction.SyncNative;
  }
  if (containsBytes(data, getU8Encoder().encode(18), 0)) {
    return TokenInstruction.InitializeAccount3;
  }
  if (containsBytes(data, getU8Encoder().encode(19), 0)) {
    return TokenInstruction.InitializeMultisig2;
  }
  if (containsBytes(data, getU8Encoder().encode(20), 0)) {
    return TokenInstruction.InitializeMint2;
  }
  if (containsBytes(data, getU8Encoder().encode(21), 0)) {
    return TokenInstruction.GetAccountDataSize;
  }
  if (containsBytes(data, getU8Encoder().encode(22), 0)) {
    return TokenInstruction.InitializeImmutableOwner;
  }
  if (containsBytes(data, getU8Encoder().encode(23), 0)) {
    return TokenInstruction.AmountToUiAmount;
  }
  if (containsBytes(data, getU8Encoder().encode(24), 0)) {
    return TokenInstruction.UiAmountToAmount;
  }
  throw new Error(
    'The provided instruction could not be identified as a token instruction.'
  );
}

export type ParsedTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
> =
  | ({
      instructionType: TokenInstruction.InitializeMint;
    } & ParsedInitializeMintInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeAccount;
    } & ParsedInitializeAccountInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeMultisig;
    } & ParsedInitializeMultisigInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.Transfer;
    } & ParsedTransferInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.Approve;
    } & ParsedApproveInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.Revoke;
    } & ParsedRevokeInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.SetAuthority;
    } & ParsedSetAuthorityInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.MintTo;
    } & ParsedMintToInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.Burn;
    } & ParsedBurnInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.CloseAccount;
    } & ParsedCloseAccountInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.FreezeAccount;
    } & ParsedFreezeAccountInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.ThawAccount;
    } & ParsedThawAccountInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.TransferChecked;
    } & ParsedTransferCheckedInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.ApproveChecked;
    } & ParsedApproveCheckedInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.MintToChecked;
    } & ParsedMintToCheckedInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.BurnChecked;
    } & ParsedBurnCheckedInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeAccount2;
    } & ParsedInitializeAccount2Instruction<TProgram>)
  | ({
      instructionType: TokenInstruction.SyncNative;
    } & ParsedSyncNativeInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeAccount3;
    } & ParsedInitializeAccount3Instruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeMultisig2;
    } & ParsedInitializeMultisig2Instruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeMint2;
    } & ParsedInitializeMint2Instruction<TProgram>)
  | ({
      instructionType: TokenInstruction.GetAccountDataSize;
    } & ParsedGetAccountDataSizeInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.InitializeImmutableOwner;
    } & ParsedInitializeImmutableOwnerInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.AmountToUiAmount;
    } & ParsedAmountToUiAmountInstruction<TProgram>)
  | ({
      instructionType: TokenInstruction.UiAmountToAmount;
    } & ParsedUiAmountToAmountInstruction<TProgram>);
